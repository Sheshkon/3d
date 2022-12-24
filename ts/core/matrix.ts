import { Vector3D } from "./vector3D"

export class Matrix3x3 {
    m : number[][]
    public constructor(m: number[][]) {
        this.m = []
        for (let i = 0; i < 3; i++) {
            this.m[i] = []
            for (let j = 0; j < 3; j++) {
                this.m[i][j] = m[i][j]
            }
        }
    }

    public multiplyVector(vec: Vector3D): Vector3D {
        let newVector = new Vector3D(
            this.m[0][0] * vec.x + this.m[0][1] * vec.y + this.m[0][2] * vec.z,
            this.m[1][0] * vec.x + this.m[1][1] * vec.y + this.m[1][2] * vec.z,
            this.m[2][0] * vec.x + this.m[2][1] * vec.y + this.m[2][2] * vec.z
        )

        return newVector
    }
}