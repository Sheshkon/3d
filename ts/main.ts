
import obj from "bundle-text:../src/obj/man.obj";
import { Color } from "./core/color";
import { Drawer } from "./core/drawer";
import { Matrix3x3 } from "./core/matrix";
import { Model } from "./core/model";
import { ObjParser } from "./core/obj.parser";
import { Triangle } from "./core/triangle";
import { Vector3D } from "./core/vector";

import textureTxt from "bundle-text:../src/obj/texture.txt";



const canvas = document.getElementById("canvas") as HTMLCanvasElement
const WIDTH = 800
const HEIGHT = 800
const PIXEL_SIZE = 1
const IS_READ_FILE = true
const IS_ANIM = true

let alpha = 0
const  drawer = new Drawer(canvas, WIDTH, HEIGHT, PIXEL_SIZE)
let model: Model


const dx = WIDTH / 2
const dy = HEIGHT / 2
const objZoom = 400
const addedVector = new Vector3D(dx, dy, 0)
const minusLightDir = new Vector3D(0, 0, 1)





if (IS_READ_FILE) {
    
    let parsedObj = ObjParser.parse(obj);

    let data: number[] = []
    textureTxt.trim()
    let texture = textureTxt.split("\n")

    

    for (let i = 0; i < texture.length; i++){
        let line = texture[i].trim().split(" ")
        for (let j = 0; j < line.length; j++){
            data.push(parseInt(line[j]))
        }
    }

    let textureData = new Uint8ClampedArray(data)
    console.log(textureData)
    
    




    model = new Model(parsedObj.mesh, parsedObj.textureCords, parsedObj.normals, textureData);
    console.log(model);
    drawer.textureBuffer = model.texture

    // let imgData = new ImageData(textureData, 64, 64)
    // canvas.width = 64
    // canvas.height = 64
    // let ctx = canvas.getContext('2d')
    update() 
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


function drawModel(){
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

    
    for (let i = 0; i < model.length; i++) {
        let triangle: Triangle = model.mesh[i]
        let textureCord :Triangle = model.textureCords[i]
        let normals:Triangle = model.normals[i]
   
        let a: Vector3D = rotateY(triangle.a, alpha)
        let b: Vector3D = rotateY(triangle.b, alpha)
        let c: Vector3D = rotateY(triangle.c, alpha)

        let vec1 = b.subtract(a)
        let vec2 = c.subtract(a)
        let normal = vec1.crossProduct(vec2)
        normal.normalize()
        
       
        let intensity = minusLightDir.dotProduct(normal)


        if (intensity > 0){

           

            // console.log(textureCords.a.y, textureCords.a.x, rIndx)
           

    

            // console.log(model.texture[rIndx])

        

            // console.log(rIndx)

            // drawer.setColor(new Color(model.texture[rIndx]* intensity, model.texture[rIndx + 1]*intensity, model.texture[rIndx + 2] * intensity))

    
            // drawer.setColor(new Color(intensity*255, intensity*0, intensity*0))

            drawer.fillTriangle(
                a.multiply(objZoom).add(addedVector).round(),
                b.multiply(objZoom).add(addedVector).round(),
                c.multiply(objZoom).add(addedVector).round(),
                textureCord, 
                intensity
            )
        }
       
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
