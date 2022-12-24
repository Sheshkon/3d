
import obj from "bundle-text:../src/obj/skull.obj";
import { Color } from "./core/color";
import { Drawer } from "./core/drawer";
import { Matrix3x3 } from "./core/matrix";
import { ObjParser } from "./core/obj.parser";
import { Vector3D } from "./core/vector3D";


const canvas = document.getElementById("canvas") as HTMLCanvasElement
const WIDTH = 800
const HEIGHT = 800
const PIXEL_SIZE = 1
const IS_READ_FILE = true
const IS_ANIM = true

let alpha = 0
const  drawer = new Drawer(canvas, WIDTH, HEIGHT, PIXEL_SIZE)
let model



if (IS_READ_FILE) {
    model = ObjParser.parse(obj)
    drawModel()
}else{
    drawer.setColor(new Color(30, 30, 30))
    drawer.clear()
    drawer.setColor(new Color(200, 200, 0))
    let t0 =  performance.now()
    for (let i = 0; i < 1000; i++) {
        drawer.fillTriangleBarycentric(new Vector3D(100, 100, 0), new Vector3D(200, 100, 0), new Vector3D(150, 200, 0))
    }
    let t1 =  performance.now()
    console.log("Call to fill triangle with Barycentric took " + (t1 - t0) + " milliseconds.")
    drawer.setColor(new Color(200, 0, 0))
    t0 = performance.now()
    for (let i = 0; i < 1000; i++) {
        drawer.fillTriangle(new Vector3D(100, 100, 0), new Vector3D(200, 100, 0), new Vector3D(150, 200, 0))
    }
    t1 = performance.now()
    console.log("Call to fill triangle took " + (t1 - t0) + " milliseconds.")
    drawer.show()
}





// drawer.setColor(30, 30, 30)
// drawer.clear()
// drawer.setColor(200, 0, 0)
// drawer.fillTriangle(100, 100, 200, 100, 150, 200)
// drawer.show()

function drawModel(){
    
    for (let triangle of model.faces) {
        triangle.color = Color.getRanomColor()
    }
    // update()

    if (IS_ANIM){
        drawer.setUpdate(update)
        drawer.setFpsLimit(30)
        drawer.startAnimation()
    }
}


function update(){
    drawer.clearZBuffer()
    drawer.setColor(new Color(30, 30, 30))
    drawer.clear()
    drawer.setColor(new Color(200, 0, 0))

    for (const triangle of model.faces) {
        let a: Vector3D = rotateY(triangle.a, alpha)
        let b: Vector3D = rotateY(triangle.b, alpha)
        let c: Vector3D = rotateY(triangle.c, alpha)

        let dx = WIDTH / 2
        let dy = HEIGHT / 2
        let objZoom = 200


        let vec1 = b.subtract(a)
        let vec2 = c.subtract(a)
        let normal = vec1.crossProduct(vec2)
        normal.normalize()
        
        let minusLightDir = new Vector3D(0, 0, 1)
        let intensity = minusLightDir.dotProduct(normal)

        if (intensity > 0){
            drawer.setColor(new Color(intensity*255, intensity*0, intensity*0))

            drawer.fillTriangle(
                a.multiply(objZoom).add(new Vector3D(dx, dy, 0)).round(),
                b.multiply(objZoom).add(new Vector3D(dx, dy, 0)).round(),
                c.multiply(objZoom).add(new Vector3D(dx, dy, 0)).round()
            )
        }
       
    }
    drawer.show()
    alpha += Math.PI / 180

    if  (alpha > 2 * Math.PI) alpha = 0
}


function Barycentric(a: Vector3D, b: Vector3D, c: Vector3D, p: Vector3D): Vector3D{
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


function rotateY(vec: Vector3D, alpha: number): Vector3D{
    let m = new Matrix3x3([
            [Math.cos(alpha), 0, Math.sin(alpha)],
            [0, 1, 0],
            [-Math.sin(alpha), 0, Math.cos(alpha)]
    ])

    return m.multiplyVector(vec)
    

}
