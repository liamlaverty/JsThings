import { Vector2 } from '../../numerics/vector2/vector2.model';
import { Vector2Service } from '../../numerics/vector2/vector2.service';
import { GameRectangle } from '../../models/game-rectangle';

export class PhysicalEntity extends GameRectangle {
    AABB: AABB;
    Layer: number;





    GetAABB(): AABB {
        const myAABB = new AABB();

        myAABB.max = new Vector2(this.position.x, this.position.y);
        myAABB.min = new Vector2(
            this.position.x + this.size.x,
            this.position.y + this.size.y);
        this.AABB = myAABB;
        return myAABB;
    }
}


export class AABB {
    min: Vector2;
    max: Vector2;
}
