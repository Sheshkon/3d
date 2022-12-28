import { Drawer } from "./core/base";
import { Color } from "./core/color";
import { Triangle } from "./core/triangle";
import { Vector3D } from "./core/vector";
import {Mathematics} from "./core/math"
import { Model } from "./core/model";

export class Render {
    public drawer: Drawer
    public zBuffer: number[]
    public textureBuffer: Uint8ClampedArray
    public textureBufferWidth: number
    public textureBufferHeight: number
    public textureBufferLength: number
    public models = new Array<Model>()
    public lightDir = new Vector3D(0, 0, 1)
    public dx: number
    public dy: number
    public objZoom: number
    public addedVector: Vector3D
    
    
    constructor(drawer: Drawer) {
        this.drawer = drawer
        this.zBuffer = new Array(this.drawer.width * this.drawer.height).fill(-Infinity)
        this.dx = this.drawer.width / 2
        this.dy = this.drawer.height / 2
        this.objZoom = 300
        this.addedVector = new Vector3D(this.dx, this.dy, 0)
    }


    public render() {
        this.clearZBuffer()
        this.drawer.setColor(new Color(30, 30, 30))
        this.drawer.clear()
        this.drawModels()
        this.drawer.show()
    }


    public addLine(x0: number, y0: number , x1: number, y1: number): void{
        // y = kx + b
        // setpY = k = (y1 - y0) / (x1 - x0)
        // b = y0 - kx0
        // Bresenham's line algorithm
        
        let isInvert = false
    
        if (Math.abs(y1 - y0) > Math.abs(x1 - x0)) {
            [x0, y0] = [y0, x0];
            [x1, y1] = [y1, x1];
            isInvert = true
        }
    
        if (x1 < x0) {
            [x0, x1] = [x1, x0];
            [y0, y1] = [y1, y0];
        }
    
        let xLength = x1 - x0
        let deltaY = 0
        let stepY = 2 * Math.abs((y1 - y0))
        let y = y0
        let dy = y1 > y0 ? 1 : -1
        let doubleXLenght = 2 * xLength
    
        for (let x = x0; x <= x1; x++) {
            this.drawer.addPoint(isInvert ? y : x, isInvert ? x : y)
            deltaY += stepY
            if (deltaY > xLength) {
                y += dy
                deltaY -= doubleXLenght
            }
    
        }
    }

    public addTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): void {
        this.addLine(x0, y0, x1, y1)
        this.addLine(x1, y1, x2, y2)
        this.addLine(x2, y2, x0, y0)
    }

    public getBarycentricCoords(a: Vector3D, b: Vector3D, c: Vector3D, p: Vector3D): Vector3D{
        let ab = b.subtract(a)
        let ac = c.subtract(a)
        let pa = a.subtract(p)
    
        let v1 = new Vector3D(ab.x, ac.x, pa.x)
        let v2 = new Vector3D(ab.y, ac.y, pa.y)
        let v3 = v1.crossProduct(v2)
    
        if (v3.z == 0) return null
    
        let u = v3.x / v3.z
        let v = v3.y / v3.z
    
        return new Vector3D(1 - u - v, v, u)
    }

    private _interpolateFromBaricentricToTextureCoords(textureTriangle: Triangle, barycentric: Vector3D): Vector3D {
        let texturePoint = 
            textureTriangle.a.multiply(barycentric.x).add(
                textureTriangle.b.multiply(barycentric.y).add(
                    textureTriangle.c.multiply(barycentric.z)
            )
            )
        return texturePoint
    }

    public fillTriangleBarycentric(a: Vector3D, b:Vector3D, c: Vector3D, textureTriangle: Triangle = null, intensity = 1): void {
        const [minX, maxX] = Mathematics.getMinMax(a.x, b.x, c.x)
        const [minY, maxY] = Mathematics.getMinMax(a.y, b.y, c.y)

        for (let y = minY; y <= maxY; y++){
            for (let x = minX; x <= maxX; x++){
                
                let barycentric = this.getBarycentricCoords(a, b, c, new Vector3D(x, y, 0))
                let index = y * this.drawer.width + x
                if (barycentric == null){
                    continue
                }
                let pz = a.z * barycentric.x + b.z * barycentric.y + c.z * barycentric.z

                if (pz <= this.zBuffer[index]){
                    continue
                }
                if (barycentric.x > 0 && barycentric.y > 0 && barycentric.z > 0){
                    if (textureTriangle != null){
                        let uv = this._interpolateFromBaricentricToTextureCoords(textureTriangle, barycentric)
                        let rIndx = 4 *(Math.ceil(uv.x*this.textureBufferWidth)  + Math.ceil(uv.y * this.textureBufferHeight)*this.textureBufferWidth)
                        let c = new Color(this.textureBuffer[rIndx]*intensity, this.textureBuffer[rIndx+1]*intensity, this.textureBuffer[rIndx+1]*intensity)
                        this.drawer.setColor(c)    
                    }
                    this.drawer.addPoint(x, y)
                    this.zBuffer[index] = pz
                }
            }
        }
    }

    public fillTriangle(a: Vector3D, b: Vector3D, c: Vector3D, textureTriangle: Triangle = null, intensity: number = 1, modelIndx: number): void {

        let x0 = a.x
        let y0 = a.y
        let x1 = b.x
        let y1 = b.y
        let x2 = c.x
        let y2 = c.y

        // sort points by y
        // devide triangle on two parts
        // fill first part
        // fill second part
        // user ctg to find x
        
        if (x0 == x1 && x1 == x2) {
            return
        }

        if (y0 == y1 && y1 == y2) {
            return
        }

        if (y1 < y0) {
            [x0, x1] = [x1, x0];
            [y0, y1] = [y1, y0];
        }

        if (y2 < y0) {
            [x0, x2] = [x2, x0];
            [y0, y2] = [y2, y0];
        }

        if (y2 < y1) {
            [x1, x2] = [x2, x1];
            [y1, y2] = [y2, y1];
        }

        let ctgA = (x2 - x0) / (y2 - y0);
        let ctgB = y1 != y0 ? (x1 - x0) / (y1 - y0) : 0;
        let ctgC = y2 != y1 ? (x2 - x1) / (y2 - y1) : 0;

        let xA = x0;
        let xB = x0;
        let xC = x1;

        let xFrom: number, xTo: number;

        for (let y = y0;; y++) {
            xFrom = Math.round(xA);
            xTo = y < y1 ? Math.round(xB) : Math.round(xC);
            if (xTo < xFrom) {
                [xFrom, xTo] = [xTo, xFrom];
            }
            for (let x = xFrom; x <= xTo; x++) {
                let barycentric = this.getBarycentricCoords(a, b, c, new Vector3D(x, y, 0))
                if (barycentric != null){
                    let pz = a.z * barycentric.x + b.z * barycentric.y + c.z * barycentric.z
                    let index = y * this.drawer.width + x

                    // let uv = this.fromBarycentricTo(barycentric, textureTriangle.a.multiply(64), textureTriangle.b.multiply(64), textureTriangle.c.multiply(64))
                           
                    if (pz > this.zBuffer[index]){
                        if (textureTriangle != null) {

                            let [textureWidth, textureHeight, textureLength] = [this.models[modelIndx].textureWidth, this.models[modelIndx].textureHeight, this.models[modelIndx].textureLength]
                            // console.log(textureWidth, textureHeight, textureLength)
                            let uv = this._interpolateFromBaricentricToTextureCoords(textureTriangle, barycentric)
                            let uvX = Math.ceil(uv.x*textureWidth)
                            let uvY = Math.ceil(uv.y*textureHeight)
                            let rIndx = textureLength - 4 *(uvX + uvY*textureWidth) 
                            let r = this.models[modelIndx].texture[rIndx] * intensity
                            let g = this.models[modelIndx].texture[rIndx+1]* intensity
                            let b = this.models[modelIndx].texture[rIndx+2]* intensity
                            let c = new Color(r, g, b)
                            this.drawer.setColor(c)
                        }
                        else {
                            this.drawer.setColor(new Color(255*intensity, 255*intensity, 255*intensity))
                        }
                        this.drawer.addPoint(x, y)
                        this.zBuffer[index] = pz
                    }
                }
            }
    
            if (y >= y2) {
                break;
            }
    
            xA += ctgA;
            if (y < y1) {
                xB += ctgB;
            }
            else {
                xC += ctgC;
            }
        }
    }

    public drawModels(){
        for (let j = 0; j < this.models.length; j++) {
         
            for (let i = 0; i < this.models[j].length; i++) {
                let triangle: Triangle = this.models[j].mesh[i]
                let textureCord :Triangle = this.models[j].textureCords[i]
                let normals:Triangle =  this.models[j].normals[i]
        
                let a: Vector3D = triangle.a
                let b: Vector3D = triangle.b
                let c: Vector3D = triangle.c
                let vec1 = b.subtract(a)
                let vec2 = c.subtract(a)
                let normal = vec1.crossProduct(vec2)
                normal.normalize()
                            
                let intensity = this.lightDir.dotProduct(normal)

                if (intensity > 0){

                    this.fillTriangle(
                        a.multiply(this.objZoom).add(this.addedVector).round(),
                        b.multiply(this.objZoom).add(this.addedVector).round(),
                        c.multiply(this.objZoom).add(this.addedVector).round(),
                        textureCord, 
                        intensity,
                        j
                    )
                }
            
            }
        }
    }
            


    public clearZBuffer(): void{
        this.zBuffer = new Array(this.drawer.width * this.drawer.height).fill(-Infinity)
    }

    public addModel(model: Model){
        this.models.push(model)
    }  

    public clearModels(){
        this.models = []
    }

    public setModel(model: Model){
        this.models = [model]
    }
}
