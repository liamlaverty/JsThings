export class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    concat() {
        return 'x:[' + this.x + '], y:[' + this.y + ']';
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
