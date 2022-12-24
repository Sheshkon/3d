import { Triangle } from "./triangle";
import { Vector3D } from "./vector3D";


export class ObjParser{
    public static parse(obj: string): any{

        let _obj = obj.split("\n");
        let _vertices = [];
        let _faces = [];
        let lineItems: string[] = []

        for(let i = 0; i < _obj.length; i++){
            let line = _obj[i]
            console.log(line)
            switch (line[0]) {
                case "v":
                    lineItems = line.split(" ")
                    _vertices.push(new Vector3D(
                            parseFloat(lineItems[1]),
                            parseFloat(lineItems[2]),
                            parseFloat(lineItems[3])
                        )
                    )
                    break

                case "f":
                    lineItems = line.split(" ")
                    let point1Info = lineItems[1].split("/")
                    let point2Info = lineItems[2].split("/")
                    let point3Info = lineItems[3].split("/")
                    _faces.push(new Triangle(
                            _vertices[parseInt(point1Info[0])-1],
                            _vertices[parseInt(point2Info[0])-1],
                            _vertices[parseInt(point3Info[0])-1]
                        )
                    )
                    break
            }
        }

        let _model = {
            vertices: _vertices,
            faces: _faces
        }

        console.log(_model)

        return _model;
    }
}