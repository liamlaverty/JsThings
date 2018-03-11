import { Vector2 } from '../numerics/vector2/vector2.model';
import { Vector2Service } from '../numerics/vector2/vector2.service';

export class Camera {

    Viewport: Vector2; // only need height and width from this
    ViewportDiv2: Vector2;
    FocalPoint: Vector2; // only need the x,y values from here, should be the "main character"
    private vector2Service: Vector2Service;

    Position: Vector2;
    Origin: Vector2;
    Zoom: number;
    Rotation: number;

    constructor(myViewport: Vector2, myFocalPoint: Vector2,
    vector2Service: Vector2Service) {
        this.Viewport = myViewport;
        this.FocalPoint = myFocalPoint;
        this.ViewportDiv2 = new Vector2(this.Viewport.x / 2, this.Viewport.y / 2);
    }

    GetViewMatrix(parallax: Vector2) {
        this.LookAt(this.FocalPoint);

    }


    LookAt(position: Vector2): void {
        this.Position = this.vector2Service.Subtract(position, this.ViewportDiv2);
    }
}
