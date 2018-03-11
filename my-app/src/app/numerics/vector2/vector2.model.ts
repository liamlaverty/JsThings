export class Vector2 {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getValueX() {
        return this.x;
    }
    getValueY() {
        return this.y;
    }

    setValueX(x: number) {
        this.x = x;
    }
    setValueY(y: number) {
        this.y = y;
    }
    setValues(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
