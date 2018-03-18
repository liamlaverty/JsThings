import { GameRectangle } from './models/game-rectangle';
import { Vector2 } from './numerics/vector2/vector2.model';


export const RECTANGLES: GameRectangle[] = [
    {
        name: 'sky', id: 0, color: '#afeeee',
        position: new Vector2(0, 0),
        size: new Vector2(10000, 1000),
    },
];

export const SKY: GameRectangle[] = [
    {
        name: 'sky', id: 0, color: '#afeeee',
        position: new Vector2(0, 0),
        size: new Vector2(10000, 1000),
    },
];
export const GROUND: GameRectangle[] = [
    {
        name: 'ground', id: 1, color: '#00ff00',
        position: new Vector2(0, 620),
        size: new Vector2(4000, 100),
    },
];

export const PLAYER: GameRectangle[] = [
    {
        name: 'person', id: 4, color: '#ff0000',
        position: new Vector2(10, 275),
        size: new Vector2(150, 100),
    },
];

export const CLOUDS: GameRectangle[] = [
    {
        name: 'cloud', id: 2, color: '#fff',
        position: new Vector2(10, 54),
        size: new Vector2(100, 100),
    },
    {
        name: 'cloud', id: 3, color: '#fff',
        position: new Vector2(-100, -50),
        size: new Vector2(100, 100),
    },
    {
        name: 'cloud', id: 4, color: '#fff',
        position: new Vector2(100, -50),
        size: new Vector2(100, 100),
    },
    {
        name: 'cloud', id: 5, color: '#fff',
        position: new Vector2(155, 10),
        size: new Vector2(100, 100),
    },
];
