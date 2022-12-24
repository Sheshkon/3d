import { Color } from "./color"
import { Vector3D } from "./vector3D"


export class Triangle {

    public a: Vector3D
    public b: Vector3D
    public c: Vector3D
    public color: Color

    constructor(p1: Vector3D, p2: Vector3D, p3: Vector3D, color: Color = new Color(255, 255, 255)) {
        this.a = new Vector3D(p1.x, p1.y, p1.z)
        this.b = new Vector3D(p2.x, p2.y, p2.z)
        this.c = new Vector3D(p3.x, p3.y, p3.z)
        this.color = color
    }

}