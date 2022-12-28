export class Mathematics{

    public static getMinMax(a: number, b: number, c: number): [number ,number]{
        let min: number = a
        let max: number = a
    
        if (b < min) min = b
        if (c < min) min = c
        if (b > max) max = b
        if (c > max) max = c
    
        return [min, max]
    }

}

