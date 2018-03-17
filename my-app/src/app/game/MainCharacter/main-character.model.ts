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
    }


    public Update(gameTime: number): void {
        console.log('updating Mc');
        this.force.x = this.mathHelperService.Lerp(-this.force.x, 0, 1);
        this.force.y = this.mathHelperService.Lerp(-this.force.y, 0, 1);
    }

    HandleInput(gameTime: number): void {

    }
}

export const MAINCHARACTER: MainCharacter = new MainCharacter(PLAYER);

