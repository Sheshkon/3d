import { Model } from "./model";
import { Triangle } from "./triangle";
import { Vector3D } from "./vector";


export class ObjParser{
    public static parse(obj: string): {mesh: Triangle[], textureCords: Triangle[], normals: Triangle[]}{

        let _obj = obj.split("\n");
        let _vertices = [];
        let _faces = [];
        let _normals = [];
        let _textureCoords = [];
        let mesh = []
        let textureCords = []
        let normals = []

        let lineItems: string[] = []

        for(let i = 0; i < _obj.length; i++){
            let line = _obj[i]

            switch (line[0]) {
                case "v":
                    lineItems = line.split(" ")
                    switch (line[1]){
                        case " ":
                            _vertices.push(new Vector3D(
                                parseFloat(lineItems[1]),
                                parseFloat(lineItems[2]),
                                parseFloat(lineItems[3])
                                )
                            )   
                        break

                        case "t":
                            _textureCoords.push(new Vector3D(
                                parseFloat(lineItems[2]),
                                parseFloat(lineItems[3]),
                                0.0
                                )
                            )
                        break

                        case "n":
                            _normals.push(new Vector3D(
                                parseFloat(lineItems[2]),
                                parseFloat(lineItems[3]),
                                parseFloat(lineItems[4])
                                )
                            )
                        break

                    }
                    break
                    
                case "f":
                    lineItems = line.split(" ")
                    let point1Info = lineItems[1].split("/")
                    let point2Info = lineItems[2].split("/")
                    let point3Info = lineItems[3].split("/")
                    mesh.push(new Triangle(
                        _vertices[parseInt(point1Info[0])-1],
                        _vertices[parseInt(point2Info[0])-1],
                        _vertices[parseInt(point3Info[0])-1]
                       
                    ))

                    textureCords.push(new Triangle(
                        _textureCoords[parseInt(point1Info[1])-1],
                        _textureCoords[parseInt(point2Info[1])-1],
                        _textureCoords[parseInt(point3Info[1])-1]
                    ))

                    normals.push(new Triangle(
                        _normals[parseInt(point1Info[2])-1],
                        _normals[parseInt(point2Info[2])-1],
                        _normals[parseInt(point3Info[2])-1]
                    ))
            }
        }

        console.log(_textureCoords)


        return {mesh: mesh, textureCords: textureCords, normals: normals}
    }
}