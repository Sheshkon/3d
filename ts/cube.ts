import obj from "bundle-text:../src/obj/test.obj";
import { ObjParser } from "./obj.parser";

const canvas = <HTMLCanvasElement> document.getElementById('canvas')
const canvasRec = canvas.getBoundingClientRect()


class HSL{
    public h: number
    public s: number
    public l: number

    public constructor(h: number, s: number, l: number) {
        this.h = h
        this.s = s
        this.l = l
    }

    public toString() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`
    }

}

class COLORS {
    static red =  new HSL(0, 100, 50)
    static green = new HSL(120, 100, 50)
    static blue = new HSL(240, 100, 50)
    static yellow = new HSL(60, 100, 50)
    static orange = new HSL(30, 100, 50)
    static purple = new HSL(300, 100, 50)
    static white = new HSL(0, 0, 100)
}

class Vector3D {

    x: number
    y: number
    z: number

    constructor(x: number, y: number, z:number) {
        this.x = x
        this.y = y
        this.z = z
    }

    public crossProduct(v: Vector3D): Vector3D {
        return new Vector3D(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x)
    }

    public dotProduct(v: Vector3D): number { 
        return this.x * v.x + this.y * v.y + this.z * v.z
    }

    public subtract(v: Vector3D): Vector3D {
        return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z)
    }

    public normolize() {
        let length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        if (length != 0) {
            this.x /= length
            this.y /= length
            this.z /= length
        }
    }
}

class Triangle {

    public a: Vector3D
    public b: Vector3D
    public c: Vector3D

    public color: HSL

    public constructor(p1: Vector3D, p2: Vector3D, p3: Vector3D, color: HSL = COLORS.red) {
        this.a = new Vector3D(p1.x, p1.y, p1.z)
        this.b = new Vector3D(p2.x, p2.y, p2.z)
        this.c = new Vector3D(p3.x, p3.y, p3.z)
        this.color = color
    }

    public changeLightness() {
        // this.color.s = (this.a.z + this.b.z + this.c.z)/ 3 * 100
        // this.color.h = this.a.z * 60
        // this.color.l = this.a.z * 60
    }
}


class Mesh{
    public triangles: Triangle[]

    public constructor(obj: string | null) {
        if (obj != null) {
            this._createMesh(obj)
        }

    }

    private _createMesh(obj: string) {
        this.triangles = []
        let _obj = ObjParser.parse(obj)

        for (let i = 0; i < _obj.faces.length; i++) {
            let face = _obj.faces[i]

            let p1 = _obj.vertices[face[0]]
            let p2 = _obj.vertices[face[1]]
            let p3 = _obj.vertices[face[2]]

            // let color = COLORS.white
            let triangle = new Triangle(
                new Vector3D(p1[0], p1[1], p1[2]),
                new Vector3D(p2[0], p2[1], p2[2]),
                new Vector3D(p3[0], p3[1], p3[2])
                )

            this.triangles.push(triangle)
        }
    }

}

class Matrix4x4 {
    m : number[][]
    public constructor(m: number[][]) {
        this.m = []
        for (let i = 0; i < 4; i++) {
            this.m[i] = []
            for (let j = 0; j < 4; j++) {
                this.m[i][j] = m[i][j]
            }
        }
    }
}

class Camera {
    public position: Vector3D
    public near: number
    public far: number
    public fov: number
    public aspect: number
    public fovRad: number

    public constructor(position: Vector3D, near: number, far: number, fov: number, aspect: number) {
        this.position = position
        this.near = near
        this.far = far
        this.fov = fov
        this.aspect = aspect
        this.fovRad = 1.0 / Math.tan(fov * 0.5 / 180 * Math.PI)
    }
}

class Object3D {
    public position: Vector3D
    public mesh: Mesh

    public constructor(position: Vector3D, obj: string | null) {
        this.position = position
        this.mesh = new Mesh(obj)
    }
}


class Cube extends Object3D {
    public size: number
 
    public constructor(position: Vector3D) {
        super(position, null);
        this.position = position
        this.mesh.triangles = this._createMesh()
    }

    private _createMesh() {
        // console.log(COLORS.blue)
        return [
            new Triangle(new Vector3D(0.0, 0.0, 0.0), new Vector3D(0.0, 1.0, 0.0), new Vector3D(1.0, 1.0, 0.0), COLORS.blue),
            new Triangle(new Vector3D(0.0, 0.0, 0.0), new Vector3D(1.0, 1.0, 0.0), new Vector3D(1.0, 0.0, 0.0), COLORS.blue),
            // Right
            new Triangle(new Vector3D(1.0, 0.0, 0.0), new Vector3D(1.0, 1.0, 0.0), new Vector3D(1.0, 1.0, 1.0), COLORS.red),
            new Triangle(new Vector3D(1.0, 0.0, 0.0), new Vector3D(1.0, 1.0, 1.0), new Vector3D(1.0, 0.0, 1.0), COLORS.red),
            // Back
            new Triangle(new Vector3D(1.0, 0.0, 1.0), new Vector3D(1.0, 1.0, 1.0), new Vector3D(0.0, 1.0, 1.0), COLORS.green),
            new Triangle(new Vector3D(1.0, 0.0, 1.0), new Vector3D(0.0, 1.0, 1.0), new Vector3D(0.0, 0.0, 1.0), COLORS.green),
            // Left
            new Triangle(new Vector3D(0.0, 0.0, 1.0), new Vector3D(0.0, 1.0, 1.0), new Vector3D(0.0, 1.0, 0.0), COLORS.orange),
            new Triangle(new Vector3D(0.0, 0.0, 1.0), new Vector3D(0.0, 1.0, 0.0), new Vector3D(0.0, 0.0, 0.0), COLORS.orange),
            // Top
            new Triangle(new Vector3D(0.0, 1.0, 0.0), new Vector3D(0.0, 1.0, 1.0), new Vector3D(1.0, 1.0, 1.0), COLORS.purple),
            new Triangle(new Vector3D(0.0, 1.0, 0.0), new Vector3D(1.0, 1.0, 1.0), new Vector3D(1.0, 1.0, 0.0), COLORS.purple),
            // Bottom
            new Triangle(new Vector3D(1.0, 0.0, 1.0), new Vector3D(0.0, 0.0, 1.0), new Vector3D(0.0, 0.0, 0.0), COLORS.yellow),
            new Triangle(new Vector3D(1.0, 0.0, 1.0), new Vector3D(0.0, 0.0, 0.0), new Vector3D(1.0, 0.0, 0.0), COLORS.yellow)
        ]

    }

}


class Render {

    public canvas: HTMLCanvasElement
    public ctx: CanvasRenderingContext2D
    public canvasRec: DOMRect
    public camera: Camera
    public aspectRation: number
    public projectionMatrix: Matrix4x4

    constructor(canvas: HTMLCanvasElement, camera: Camera) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')!
        this.canvasRec = canvas.getBoundingClientRect()
            // console.log('this.canvasRec', this.canvasRec)
        this.camera = camera
        this.aspectRation = this.camera.aspect
        this.projectionMatrix = new Matrix4x4([
            [this.camera.fovRad * this.aspectRation, 0.0, 0.0, 0.0],
            [0.0, this.camera.fovRad, 0, 0],
            [0.0, 0.0, this.camera.far / (this.camera.far - this.camera.near), 1.0],
            [0.0, 0.0, (-this.camera.far * this.camera.near) / (this.camera.far - this.camera.near), 0.0]
        ])

    }

    public multiplayVectorAndMatrix(i: Vector3D, m: Matrix4x4) {
        let newVector = new Vector3D(
            i.x * m.m[0][0] + i.y * m.m[1][0] + i.z * m.m[2][0] + m.m[3][0],
            i.x * m.m[0][1] + i.y * m.m[1][1] + i.z * m.m[2][1] + m.m[3][1],
            i.x * m.m[0][2] + i.y * m.m[1][2] + i.z * m.m[2][2] + m.m[3][2]
        )

        let w = i.x * m.m[0][3] + i.y * m.m[1][3] + i.z * m.m[2][3] + m.m[3][3]

        if (Math.abs(w) !== 0.0) {
            newVector.x /= w
            newVector.y /= w
            newVector.z /= w
        }
        // console.log('newVector', newVector)

        return newVector
    }

    public getRotateXMatrix(angle: number) {
        let cos = Math.cos(angle*0.5)
        let sin = Math.sin(angle*0.5)

        return new Matrix4x4([
            [1, 0, 0, 0],
            [0, cos, sin, 0],
            [0, -sin, cos, 0],
            [0, 0, 0, 1]
        ])
    }

    public getRotateYMatrix(angle: number) {
        let cos = Math.cos(angle*0.5)
        let sin = Math.sin(angle*0.5)

        return new Matrix4x4([
            [cos, 0, -sin, 0],
            [0, 1, 0, 0],
            [sin, 0, cos, 0],
            [0, 0, 0, 1]
        ])
    }

    public getRotateZMatrix(angle: number) {
        let cos = Math.cos(angle)
        let sin = Math.sin(angle)

        return new Matrix4x4([
            [cos, sin, 0, 0],
            [-sin, cos, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ])
    }

    public drawTriangle(triangle: Triangle) {

        // console.log('triangle', triangle)
        this.ctx.beginPath()
        this.ctx.moveTo(triangle.a.x, triangle.a.y)
        this.ctx.lineTo(triangle.b.x, triangle.b.y)
        this.ctx.lineTo(triangle.c.x, triangle.c.y)
        this.ctx.closePath()
        this.ctx.strokeStyle = COLORS.white.toString()
        this.ctx.stroke()
        triangle.changeLightness()
        // console.log(triangle.color)
        // console.log(triangle.a.y - triangle.b.y)
        // this.ctx.fillStyle = triangle.color.toString()
        // console.log('triangle.a.z', triangle.a.z)
        // console.log('triangle.color', triangle.color)
        // this.ctx.fill()
    }

    public rotateTriangle(triangle: Triangle, rotateMatrix: Matrix4x4) {
        return new Triangle(
            this.multiplayVectorAndMatrix(triangle.a, rotateMatrix),
            this.multiplayVectorAndMatrix(triangle.b, rotateMatrix),
            this.multiplayVectorAndMatrix(triangle.c, rotateMatrix),
            triangle.color
        )
    }

    public rotateXTriangle(triangle: Triangle, angle: number) {
        return this.rotateTriangle(triangle, this.getRotateXMatrix(0*angle))
    }

    public rotateYTriangle(triangle: Triangle, angle: number) {
        return this.rotateTriangle(triangle, this.getRotateYMatrix(angle))
    }

    public rotateZTriangle(triangle: Triangle, angle: number) {
        return this.rotateTriangle(triangle, this.getRotateZMatrix(angle))
    }

    public projectTriangle(triangle: Triangle) {
        return new Triangle(
            this.multiplayVectorAndMatrix(triangle.a, this.projectionMatrix),
            this.multiplayVectorAndMatrix(triangle.b, this.projectionMatrix),
            this.multiplayVectorAndMatrix(triangle.c, this.projectionMatrix),
            triangle.color
        )
    }


    private drawMesh(obj: Object3D, angle: number = 0.1) {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, canvas.width, canvas.height )
        angle += 0.01
        angle > 360 ? angle = 0 : angle



        for (let triangle of obj.mesh.triangles) {
        
            triangle = this.rotateYTriangle(triangle, angle)
            // console.log('triangle', triangle)
            triangle = this.rotateZTriangle(triangle, angle)
            // console.log('rotateZTriangle', triangle)
            triangle = this.rotateXTriangle(triangle, angle)

            triangle.a.z += 8
            triangle.b.z += 8
            triangle.c.z += 8

            let normal = new Vector3D(0, 0, 0)

            let line1 = triangle.b.subtract(triangle.a)
            let line2 = triangle.c.subtract(triangle.a)

            normal = line1.crossProduct(line2)
            normal.normolize()

            if (normal.dotProduct(triangle.a.subtract(camera.position)) <= 0.0) {
               
                triangle = this.projectTriangle(triangle)
                // console.log('mesh', triangle)
                let scale =  300
                
                triangle.a.x += 1
                triangle.a.y += 1

                triangle.b.x += 1
                triangle.b.y += 1

                triangle.c.x += 1
                triangle.c.y += 1


                triangle.a.x *= scale
                triangle.a.y *= scale

                triangle.b.x *= scale  
                triangle.b.y *= scale
                
                triangle.c.x *= scale
                triangle.c.y *= scale


                this.drawTriangle(triangle)
                
            }    
        }
        window.requestAnimationFrame(this.drawMesh.bind(this, obj, angle));
    }

    public drawObj(obj: Object3D) {
        this.drawMesh(obj)
    }
}


let camera = new Camera(new Vector3D(0, 0, 0), 0.1, 1000.0, 90.0, canvasRec.height / canvasRec.width)
let render = new Render(canvas, camera)

const cube = new Cube(new Vector3D(0, 0, 0))
const teaCup = new Object3D(new Vector3D(0, 0, 0), obj)


// render.drawObj(cube)
render.drawObj(teaCup)


