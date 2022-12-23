export class ObjParser{
    public static parse(obj: string): any{

        let _obj = obj.split("\n");

        let _vertices = [];
        let _faces = [];

        for(let i = 0; i < _obj.length; i++){
            let line = _obj[i].split(" ");

            if(line[0] == "v"){
                _vertices.push([parseFloat(line[1]), parseFloat(line[2]), parseFloat(line[3])]);
            }

            if(line[0] == "f"){
                _faces.push([parseInt(line[1])-1, parseInt(line[2])-1, parseInt(line[3])-1]);
            }
        }

        let _model = {
            vertices: _vertices,
            faces: _faces
        }


        return _model;
    }
}