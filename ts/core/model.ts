import { Triangle } from "./triangle"

export class Model {
    public mesh: Triangle[] = []
    public textureCords: Triangle[] = []
    public normals: Triangle[] = []
    public length: number
    public texture: Uint8ClampedArray

    public constructor(mesh: Triangle[], textureCords: Triangle[], normals: Triangle[], texture: any){
        if (mesh.length != textureCords.length || mesh.length != normals.length)
            throw new Error("Mesh, texture cords and normals must have the same length")
        
        this.length = mesh.length
        this.mesh = mesh
        this.textureCords = textureCords
        this.normals = normals
        this.texture = texture
    }

}