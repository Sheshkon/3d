import { Matrix3x3 } from "./matrix"
import { Triangle } from "./triangle"
import { Vector3D } from "./vector"

export class Model {
    public mesh: Triangle[] = []
    public textureCords: Triangle[] = []
    public normals: Triangle[] = []
    public length: number
    public textureWidth: number
    public textureHeight: number
    public textureLength: number
    public texture: Uint8ClampedArray

    public constructor(mesh: Triangle[], textureCords: Triangle[] = null, normals: Triangle[] = null, textureData: any = null){
        if (textureData != null && (mesh.length != textureCords.length || mesh.length != normals.length))
            throw new Error("Mesh, texture cords and normals must have the same length")
        
        this.length = mesh.length
        this.mesh = mesh

        if (textureCords != null){
            this.textureCords = textureCords
        }

        if (normals != null){
        this.normals = normals
        }

        if (textureData != null){
            this.texture = textureData.data
            this.textureWidth = textureData.width
            this.textureHeight = textureData.height
            this.textureLength = textureData.data.length
        }
       
    }

    public rotateY(alpha: number): void{
        let rotationMatrix = new Matrix3x3([
                [Math.cos(alpha), 0, Math.sin(alpha)],
                [0, 1, 0],
                [-Math.sin(alpha), 0, Math.cos(alpha)]
        ])

        for (let triangle of this.mesh){
            triangle.a = rotationMatrix.multiplyVector(triangle.a)
            triangle.b = rotationMatrix.multiplyVector(triangle.b)
            triangle.c = rotationMatrix.multiplyVector(triangle.c)
        }
    }

    public rotateX(alpha: number): void{
        let rotationMatrix = new Matrix3x3([
                [1, 0, 0],
                [0, Math.cos(alpha), -Math.sin(alpha)],
                [0, Math.sin(alpha), Math.cos(alpha)]
        ])

        for (let triangle of this.mesh){
            triangle.a = rotationMatrix.multiplyVector(triangle.a)
            triangle.b = rotationMatrix.multiplyVector(triangle.b)
            triangle.c = rotationMatrix.multiplyVector(triangle.c)
        }
    }

    public rotateZ(alpha: number): void{
        let rotationMatrix = new Matrix3x3([
                [Math.cos(alpha), -Math.sin(alpha), 0],
                [Math.sin(alpha), Math.cos(alpha), 0],
                [0, 0, 1]
        ])

        for (let triangle of this.mesh){
            triangle.a = rotationMatrix.multiplyVector(triangle.a)
            triangle.b = rotationMatrix.multiplyVector(triangle.b)
            triangle.c = rotationMatrix.multiplyVector(triangle.c)
        }
    }

    public translate(pos: Vector3D): void{
        for (let triangle of this.mesh){
            triangle.a = triangle.a.add(pos)
            triangle.b = triangle.b.add(pos)
            triangle.c = triangle.c.add(pos)
        }
    }

    public scale(scale: number): void{
        for (let triangle of this.mesh){
            triangle.a = triangle.a.multiply(scale)
            triangle.b = triangle.b.multiply(scale)
            triangle.c = triangle.c.multiply(scale)
        }
    }

}
