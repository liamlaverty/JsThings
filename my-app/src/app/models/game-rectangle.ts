import { Rectangle } from './rectangle';

export class GameRectangle extends Rectangle {
    id: number;
    color: string;

    texture?: string;

    name: string;
    constructor() {
        super();
    }

    // HasTexture() {
    //     return (this.texture !== null);
    // }
}
