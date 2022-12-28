export class Color {

    public r: number;
    public g: number;
    public b: number;
    public a: number;

    constructor(r: number, g: number, b: number, a: number = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public static getRanomColor(): Color {
        return new Color(this._getRandomInt(255), this._getRandomInt(255), this._getRandomInt(255))
    }

    private static  _getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max+1));
    }
}
