import {Drawer} from './core/base'

import { ObjParser } from './core/obj.parser'
import {Render} from './render'
import dog from "bundle-text:../src/obj/dog2.obj"
import man from "bundle-text:../src/obj/man.obj"
import skull from "bundle-text:../src/obj/skull.obj"

import { getTextureData } from './core/texture.color.parser'
import { Model } from './core/model'

const WIDTH = 800
const HEIGHT = 800
const canvas = document.getElementById("canvas") as HTMLCanvasElement

let drawer = new Drawer(canvas, WIDTH, HEIGHT, 1)
let render = new Render(drawer)

let parsedDog = ObjParser.parse(dog);
let parsedMan = ObjParser.parse(man);
let parsedSkull = ObjParser.parse(skull);

let modelDog: Model
let modelMan: Model
let modelSkull : Model

let textureDog = new Image ()
let textureMan = new Image ()
textureDog.src = require('../src/texture/shiba2.png')
textureMan.src = require('../src/texture/texture.png')

let rotYBtn = document.getElementById('rotateY')
let rotXBtn = document.getElementById('rotateX')
let rotZBtn = document.getElementById('rotateZ')
let rotMinusYBtn = document.getElementById('rotateMinusY')
let rotMinusXBtn = document.getElementById('rotateMinusX')
let rotMinusZBtn = document.getElementById('rotateMinusZ')
let stopRotBtn = document.getElementById('rotateStop')
let scaleBtns = [document.getElementById('scaleUp'), document.getElementById('scaleDown')]
let cntrlBtns = [rotYBtn, rotXBtn, rotZBtn, stopRotBtn,rotMinusZBtn, rotMinusXBtn, rotMinusYBtn]

let models = []
let counter = 0
let rotationPos = [0, 0, 0, 0, 0, 0, 0]
let currentModel = 0


for (let i = 0; i < cntrlBtns.length; i++) {
    cntrlBtns[i].addEventListener('click', () => {

        if (i == 3) {
            rotationPos = [0, 0, 0, 0, 0, 0, 0]
            return
        }

        rotationPos[i] = 1
        rotationPos[cntrlBtns.length - i - 1] = 0
        console.log(rotationPos)
    })
}

for (let i = 0; i < scaleBtns.length; i++) {
    scaleBtns[i].addEventListener('click', () => {
        if (i == 0) models[currentModel].scale(1.1)
        else models[currentModel].scale(0.9)
    })
}


getTextureData(textureDog.src).then(data => {
    console.log('data', data)
        modelDog = new Model(parsedDog.mesh, parsedDog.textureCords, parsedDog.normals, data);
        console.log(modelDog);
        models.push(modelDog)
        render.setModel(modelDog)


        getTextureData(textureMan.src).then(data => {
            console.log('data', data)
                modelMan = new Model(parsedMan.mesh, parsedMan.textureCords, parsedMan.normals, data);
                console.log(modelMan);
                models.push(modelMan)
                modelSkull = new Model(parsedSkull.mesh);
                models.push(modelSkull)

                setUpNextBtn()
                start()
            }
        )
 
    })


function setUpNextBtn(){
    document.getElementById("next").addEventListener("click", () => {
    console.log("next");
    counter++
    if (counter > models.length - 1) counter = 0
    currentModel = counter
    render.setModel(models[counter])

    
})

    setInterval(() => {


    }, 1000/60)
}


function start(){
    requestAnimationFrame(update)
}


function setRotation(pos){
    rotationPos = pos
}

function rotateModel(){
    
        for (let i = 0; i < rotationPos.length; i++) {
    if (rotationPos[i] == 1)
            switch (i) {
        case 0:
            models[currentModel].rotateY(Math.PI/180)
            break
        case 1:
            models[currentModel].rotateX(Math.PI/180)
            break
        case 2:
            models[currentModel].rotateZ(Math.PI/180)
            break
        case 4:
            models[currentModel].rotateZ(-Math.PI/180)
            break
        case 5:
            models[currentModel].rotateX(-Math.PI/180)
            break
        case 6:   
            models[currentModel].rotateY(-Math.PI/180)
            break
        default:
            break
    }
}
    
}

let rect = canvas.getBoundingClientRect()
console.log(rect.top, rect.right, rect.bottom, rect.left)

function update(){
    render.render()
    requestAnimationFrame(update)
    rotateModel()
}


document.addEventListener("mousemove", e => {
    console.log(e.pageX, e.pageY)
    if (e.pageX < rect.left || e.pageX > rect.right || e.pageY > rect.bottom || e.pageY < rect.top) { 
            return 
        }
    let rotateX: number = (e.pageY - rect.top - ((rect.bottom - rect.top) / 2))/ 5000
    let rotateY: number = (e.pageX - rect.left - ((rect.right - rect.left) / 2)) / 5000
        
    models[currentModel].rotateX(rotateX)
    models[currentModel].rotateY(rotateY)
})
