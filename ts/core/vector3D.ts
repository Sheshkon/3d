export class Vector3D {

    x: number
    y: number
    z: number

    constructor(x: number, y: number, z:number) {
        this.x = x
        this.y = y
        this.z = z
    }
  

    // right hand coordinate system
    public crossProduct(v: Vector3D): Vector3D {
        return new Vector3D(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x)
    }

    public dotProduct(v: Vector3D): number { 
        return this.x * v.x + this.y * v.y + this.z * v.z
    }

    public subtract(v: Vector3D): Vector3D {
        return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z)
    }

    public add(v: Vector3D): Vector3D {
        return new Vector3D(this.x + v.x, this.y + v.y, this.z + v.z)
    }

    public round(): Vector3D {
        return new Vector3D(Math.round(this.x), Math.round(this.y), Math.round(this.z))
    }

    public multiply(scalar: number): Vector3D {
        return new Vector3D(this.x * scalar, this.y * scalar, this.z * scalar)
    }

    public normalize() {
        let length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        if (length != 0) {
            this.x /= length
            this.y /= length
            this.z /= length
        }
    }
}
