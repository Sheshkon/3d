import { Color } from "./color";
import { Vector3D } from "./vector3D";

let  stopAnimation: boolean = false
let frameCount: number = 0
let fps: number = 10, fpsInterval: number, startTime: number, now: number, then: number, elapsed: number


export class Drawer {
    
        private canvas: HTMLCanvasElement;
        public width: number
        public height: number
        public canvasWidth: number
        public canvasHeight: number
        public pixelSize: number
        public pixels: Color[][]
        private context: CanvasRenderingContext2D
        private imageData: ImageData
        public currentColor: Color
        public buf: ArrayBuffer
        public buf8: Uint8ClampedArray
        public data: Uint32Array
        public int24Color: number
        public update: () => void
        public zBuffer: number[]
    
        constructor(canvas: HTMLCanvasElement, width: number, height: number, pixelSize: number) {
            this.canvas = canvas
            this.width = width * pixelSize
            this.height = height * pixelSize
            this.canvasWidth = width
            this.canvasHeight = height
            this.pixelSize = pixelSize
            this.context = this.canvas.getContext("2d")
            this.imageData = this.context.createImageData(this.width, this.height)
            this.currentColor = new Color(0, 0, 0)
            this.context.canvas.width = this.width
            this.context.canvas.height = this.height
            this.pixels = []
            this.zBuffer = new Array(this.width * this.height).fill(-Infinity)

            for (let i = 0; i < this.width; i++) {
                let cols = []
                for (let j = 0; j < this.height; j++) {
                    cols.push(new Color(0, 0, 0))
                }
                this.pixels.push(cols)
            }

            this.buf = new ArrayBuffer(this.width * this.height * 4)
            this.buf8 = new Uint8ClampedArray(this.buf)
            this.data = new Uint32Array(this.buf)

            fpsInterval = 1000 / fps
            then = Date.now()
            startTime = then
            this.update = () => {}
        
        }

        public clearZBuffer(): void{
            this.zBuffer = new Array(this.width * this.height).fill(-Infinity)
        }
      
        public setColor(color: Color): void{
           this.currentColor = color
           this.int24Color = (255 << 24) | (color.b << 16) | (color.g << 8) | color.r
        }


        public addPoint(x: number, y: number): void {
            let canvasX = x;
            let canvasY = this.canvasHeight - y - 1;
            if (this.pixelSize == 1) {
                let pixelIndex = canvasY * this.width + canvasX;
                this.data[pixelIndex] = this.int24Color;
                return;
            }
            
            const canvasStartX = canvasX * this.pixelSize;
            const canvasStartY = canvasY * this.pixelSize;
            for (var dx = 0; dx < this.pixelSize; dx++) {
                for (var dy = 0; dy < this.pixelSize; dy++) {
                    let pixelIndex = (canvasStartY + dy) * this.width + canvasStartX + dx; 
                    this.data[pixelIndex] = this.int24Color;
                }
            }
            
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
                this.addPoint(isInvert ? y : x, isInvert ? x : y)
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

        public Barycentric(a: Vector3D, b: Vector3D, c: Vector3D, p: Vector3D): Vector3D{
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

        public fillTriangleBarycentric(a: Vector3D, b:Vector3D, c: Vector3D): void {
            let minX = Math.min(a.x, b.x, c.x)
            let maxX = Math.max(a.x, b.x, c.x)

            let minY = Math.min(a.y, b.y, c.y)
            let maxY = Math.max(a.y, b.y, c.y)

            for (let y = minY; y <= maxY; y++){
                for (let x = minX; x <= maxX; x++){
                    let barycentric = this.Barycentric(a, b, c, new Vector3D(x, y, 0))

                    if (barycentric.x > 0 && barycentric.y > 0 && barycentric.z > 0){
                        this.addPoint(x, y)
                    }
                }
            }
        }

        public fillTriangle(a: Vector3D, b: Vector3D, c: Vector3D): void {

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

            let xFrom, xTo;

            for (let y = y0;; y++) {
                xFrom = Math.round(xA);
                xTo = y < y1 ? Math.round(xB) : Math.round(xC);
                if (xTo < xFrom) {
                    [xFrom, xTo] = [xTo, xFrom];
                }
                for (let x = xFrom; x <= xTo; x++) {
                    let barycentric = this.Barycentric(a, b, c, new Vector3D(x, y, 0))
                    if (barycentric != null){
                        let pz = a.z * barycentric.x + b.z * barycentric.y + c.z * barycentric.z
                        let index = y * this.width + x

                        if (pz > this.zBuffer[index]){
                            this.addPoint(x, y)
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




        public clear(): void {
            for (let x = 0; x < this.width; x++) {
                for (let y = 0; y < this.height; y++) {
                    this.data[y * this.width + x] = this.int24Color
                }
            }
        }


        public show(): void {
            this.imageData.data.set(this.buf8)
            this.context.putImageData(this.imageData, 0, 0)
        }


        public startDraw(): void {
        }


        public endDraw(): void {}

        public setFpsLimit(fps: number): void {
            fpsInterval = 1000 / fps
        }

        public startAnimation(): void {
            requestAnimationFrame(this.startAnimation.bind(this))

            now = Date.now()
            elapsed = now - then
            if(elapsed > fpsInterval){
                then = now - (elapsed % fpsInterval)
                this.update()
            }
        }

        public setUpdate(update: () => void): void {
            this.update = update
        }

        public endAnimation(): void {}

    }


