import { Vector2 } from '../../numerics/vector2/vector2.model';
import { Vector2Service } from '../../numerics/vector2/vector2.service';
import { MathHelperService } from '../../numerics/math-helper/math-helper.service';
import { GameRectangle } from '../../models/game-rectangle';
import { PLAYER } from '../../mock-rectangles';


export class MainCharacter {
    forcePower: number;
    force: Vector2;
    rectangleDetails: GameRectangle;
    private vector2Service: Vector2Service;
    private mathHelperService: MathHelperService;

    constructor(rectangles: GameRectangle[]) {
        this.force = new Vector2(0, 0);
        this.rectangleDetails = rectangles[0];
        this.mathHelperService = new MathHelperService();
    }


    public Update(gameTime: number): void {
        // console.log('force = ' + this.force.x);
        this.force.x = this.mathHelperService.Lerp(-this.force.x, 0, 0.75);
        // console.log('force = ' + this.force.x);
        this.force.y = this.mathHelperService.Lerp(-this.force.y, 0, 0.75);


        this.MoveMe();
    }



    MoveMe() {
        // console.log('moving');
        this.rectangleDetails.position.x += this.force.x;
        this.rectangleDetails.position.y += this.force.y;

        // console.log('moving on x to ' + this.rectangleDetails.position.x);
    }

    HandleInput(gameTime: number): void {

    }
}

export const MAINCHARACTER: MainCharacter = new MainCharacter(PLAYER);

