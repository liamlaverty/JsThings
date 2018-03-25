import { GameRectangle } from './models/game-rectangle';
import { Vector2 } from './numerics/vector2/vector2.model';


export const RECTANGLES: GameRectangle[] = [
    {
        name: 'sky', id: 0, color: '#00bfff',
        // texture: '/assets/img/bg.jpg',
        position: new Vector2(0, 0),
        size: new Vector2(10000, 1000),
    },
];

// export const SKY: GameRectangle[] = [
//     {
//         name: 'sky', id: 0, color: '#afeeee',
//         texture: '/assets/img/bg.png',
//         position: new Vector2(0, 0),
//         size: new Vector2(10000, 1000),
//     },
// ];
export const GROUND: GameRectangle[] = [
    {
        name: 'ground', id: 1, color: '#7cfc00',
        position: new Vector2(0, 620),
        size: new Vector2(40000, 100),
    },
];

export const PLAYER: GameRectangle[] = [
    {
        name: 'person', id: 4, color: '#ff0000',
        position: new Vector2(300, 550),
        size: new Vector2(150, 100),
    },
];



export const CLOUDS: GameRectangle[] = GetClouds();

function GetClouds() {

    const myClouds = new Array<GameRectangle>();
    for (let i = 0; i < 30; i++) {
        const rndposx = Math.floor(Math.random() * 2050) + 0;
        const rndposy = Math.floor(Math.random() * 350) + 1;
        const rndsize = Math.floor(Math.random() * 120) + 100;

        const myRect = new GameRectangle();
        myRect.name = 'cloud';
        myRect.id = 2;
        myRect.color = '#fff';
        myRect.texture = '/assets/img/cloud.png';
        myRect.position = new Vector2((rndposx * i), rndposy);
        myRect.size = new Vector2(rndsize, rndsize);
        myClouds.push(myRect);
    }

    return myClouds;

    // return [
    // {
    //     name: 'cloud', id: 2, color: '#fff',
    //     texture: '/assets/img/cloud.png',
    //     position: new Vector2(10, 54),
    //     size: new Vector2(100, 100),
    // },
    // {
    //     name: 'cloud', id: 3, color: '#fff',
    //     texture: '/assets/img/cloud.png',
    //     position: new Vector2(-100, -50),
    //     size: new Vector2(100, 100),
    // },
    // {
    //     name: 'cloud', id: 4, color: '#fff',
    //     texture: '/assets/img/cloud.png',
    //     position: new Vector2(100, -50),
    //     size: new Vector2(100, 100),
    // },
    // {
    //     name: 'cloud', id: 5, color: '#fff',
    //     texture: '/assets/img/cloud.png',
    //     position: new Vector2(155, 10),
    //     size: new Vector2(100, 100),
    // },
    // {
    //     name: 'cloud', id: 6, color: '#fff',
    //     texture: '/assets/img/cloud.png',
    //     position: new Vector2(10, 54),
    //     size: new Vector2(100, 100),
    // },
    // {
    //     name: 'cloud', id: 7, color: '#fff',
    //     texture: '/assets/img/cloud.png',
    //     position: new Vector2(-100, -50),
    //     size: new Vector2(100, 100),
    // },
    // {
    //     name: 'cloud', id: 8, color: '#fff',
    //     texture: '/assets/img/cloud.png',
    //     position: new Vector2(1100, 350),
    //     size: new Vector2(250, 400),
    // },
    // {
    //     name: 'cloud', id: 9, color: '#fff',
    //     texture: '/assets/img/cloud.png',
    //     position: new Vector2(1055, 210),
    //     size: new Vector2(200, 100),
    // },
// ];
}
