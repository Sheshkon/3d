
import obj from "bundle-text:../src/obj/sphere.obj";
import { Drawer } from "./core/drawer";
import { Matrix3x3 } from "./core/matrix";
import { ObjParser } from "./core/obj.parser";
import { Vector3D } from "./core/vector3D";


const canvas = document.getElementById("canvas") as HTMLCanvasElement
const WIDTH = 800
const HEIGHT = 800
const PIXEL_SIZE = 1
let alpha = 0

let drawer = new Drawer(canvas, WIDTH, HEIGHT, PIXEL_SIZE)

let model = ObjParser.parse(obj)
drawModel()

function drawModel(){
    drawer.setUpdate(update)
    drawer.setFpsLimit(60)
    drawer.startAnimation()
}


function update(){
    drawer.setColor(30, 30, 30)
    drawer.clear()
    drawer.setColor(200, 0, 0)

    for (const triangle of model.faces) {
        let a = rotateY(triangle.a, alpha)
        let b = rotateY(triangle.b, alpha)
        let c = rotateY(triangle.c, alpha)

        let dx = WIDTH / 2
        let dy = HEIGHT / 2
        let objZoom = 200

        drawer.addTriangle(
            Math.round(a.x*objZoom+dx), Math.round(a.y*objZoom+dy),
            Math.round(b.x*objZoom+dx), Math.round(b.y*objZoom+dy),
            Math.round(c.x*objZoom+dx), Math.round(c.y*objZoom+dy)
        )
    }
    drawer.show()
    alpha += Math.PI / 180

    if  (alpha > 2 * Math.PI) alpha = 0
}



function rotateY(vec: Vector3D, alpha: number): Vector3D{
    let m = new Matrix3x3([
            [Math.cos(alpha), 0, Math.sin(alpha)],
            [0, 1, 0],
            [-Math.sin(alpha), 0, Math.cos(alpha)]
    ])

    return m.multiplyVector(vec)
    

}