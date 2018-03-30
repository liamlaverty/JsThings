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
        position: new Vector2(0, 750),
        size: new Vector2(10000, 100),
        isPhysicalObject: true,
        isStaticObject: true,
        mass: 1
    },
];

// export const PLAYER: GameRectangle[] = [
//     {
//         name: 'person', id: 4, color: '#ff0000',
//         position: new Vector2(300, 550),
//         size: new Vector2(150, 100),
//     },
// ];

export const PLAYER: GameRectangle[] = GetPlayerObjects();

function GetPlayerObjects(itemCount: number = 1): Array<GameRectangle> {
    const myItems = new Array<GameRectangle>();

    const myRect = new GameRectangle();
    myRect.name = 'person';
    myRect.id = 4;
    myRect.color = '#ff0000';
    myRect.position = new Vector2(300, 550);
    myRect.size = new Vector2(150, 100);
    myRect.isPhysicalObject = true;
    myRect.isStaticObject = false;
    myRect.mass = 0.5;
    myItems.push(myRect);

    return myItems;
}


export const PHYSICAL_OBJECTS: GameRectangle[] = GetPhysicalObjects(10);

function GetPhysicalObjects(itemCount: number): Array<GameRectangle> {
    const myItems = new Array<GameRectangle>();

    for (let i = 0; i < itemCount; i++) {

        const rndposx = Math.floor(Math.random() * 300) + 0;
        const rndposy = Math.floor(Math.random() * 300) + 1;
        const rndsize = 100; //  Math.floor(Math.random() * 120) + 100;

        const myRect = new GameRectangle();
        myRect.name = 'physical' + i;
        myRect.isPhysicalObject = true;
        myRect.id = 100 + i;
        myRect.color = '#8A2BE2';
        myRect.position = new Vector2((rndposx * i), rndposy);
        myRect.size = new Vector2(rndsize, rndsize);
        myRect.mass = 0.1;
        myRect.isStaticObject = false;
        myItems.push(myRect);


    }
    return myItems;
}

export const CLOUDS: GameRectangle[] = GetClouds(30);

function GetClouds(itemCount: number): Array<GameRectangle> {

    const myClouds = new Array<GameRectangle>();
    for (let i = 0; i < itemCount; i++) {
        const rndposx = Math.floor(Math.random() * 2050) + 0;
        const rndposy = Math.floor(Math.random() * 350) + 1;
        const rndsize = Math.floor(Math.random() * 120) + 100;

        const myRect = new GameRectangle();
        myRect.name = 'cloud' + i;
        myRect.id = 2;
        myRect.color = '#fff';
        myRect.texture = '/assets/img/cloud.png';
        myRect.position = new Vector2((rndposx * i), rndposy);
        myRect.size = new Vector2(rndsize, rndsize);
        myClouds.push(myRect);
    }

    return myClouds;
}
