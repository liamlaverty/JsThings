export class Vector3 {

    public X: number;
    public Y: number;
    public Z: number;

    constructor(x: number, y: number, z: number) {
        this.X = x;
        this.Y = y;
        this.Z = z;
    }

    /*
        returns concatinated Vec3 as a string in the format
        x:[num],y:[num],z:[num]
    */
    concat(): string {
        return 'x:[' + this.X + '],y:[' + this.Y + '].z:[' + this.Z + ']';
    }
}
