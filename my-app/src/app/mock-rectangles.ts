import { GameRectangle } from './models/game-rectangle';


export const RECTANGLES: GameRectangle[] = [
    { name: 'sky', id: 0, color: '#afeeee', x: 0, y: 0, width: 10000, height: 1000 },
];

export const SKY: GameRectangle[] = [
    { name: 'sky', id: 0, color: '#afeeee', x: 0, y: 0, width: 10000, height: 1000 },
];
export const GROUND: GameRectangle[] = [
    { name: 'ground', id: 1, color: '#00ff00', x: 0, y: 350, width: 4000, height: 100 },
];

export const PLAYER: GameRectangle[] = [
    { name: 'person', id: 4, color: '#ff0000', x: 10, y: 275, width: 150, height: 100 },
];

export const CLOUDS: GameRectangle[] = [
    { name: 'cloud', id: 2, color: '#fff', x: 10, y: 54, width: 100, height: 100 },
    { name: 'cloud', id: 3, color: '#fff', x: 155, y: 10, width: 100, height: 100 },
];
