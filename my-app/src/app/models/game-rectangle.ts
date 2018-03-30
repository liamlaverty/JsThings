import { Rectangle } from './rectangle';
import { Vector2 } from '../numerics/vector2/vector2.model';

export class GameRectangle extends Rectangle {
    color: string;
    overrideColor?: string;

    force?: Vector2;

    texture?: string;

    isPhysicalObject?: boolean;
    isStaticObject?: boolean;
    mass?: number; /* 0 - 1 */

    name: string;
    constructor() {
        super();
    }

    // HasTexture() {
    //     return (this.texture !== null);
    // }
}
