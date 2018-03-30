import { Vector2 } from '../numerics/vector2/vector2.model';

export class Rectangle {
    id?: number;
    position: Vector2;
    size: Vector2;

    constructor() {}

    // Bottom(): void {
    //     console.log('getting bottom of the rect');
    // }

    // GetWidth(): number {
    //     return this.size.x;
    // }
    // GetHeight(): number {
    //     return this.size.y;
    // }
}


// private GenerateRectangle(
//     x: number, y: number,
//     width: number, height: number): Rectangle {
//     const rect = new Rectangle();
//     rect.size = new Vector2(x, y);
//     rect.position = new Vector2(width, height);

//     return rect;
// }
