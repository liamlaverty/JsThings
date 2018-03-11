import { Vector2 } from '../numerics/vector2/vector2.model';
import { Vector2Service } from '../numerics/vector2/vector2.service';
import { Matrix } from '../numerics/matrix/matrix.model';
import { MatrixService } from '../numerics/matrix/matrix.service';
import { Vector3Service } from '../numerics/vector3/vector3.service';
import { Vector3 } from '../numerics/vector3/vector3.model';

export class Camera {

    Viewport: Vector2; // only need height and width from this
    ViewportDiv2: Vector2;
    FocalPoint: Vector2; // only need the x,y values from here, should be the "main character"
    private vector2Service: Vector2Service;
    private vector3Service: Vector3Service;
    private mtxService: MatrixService;

    Position: Vector2;
    Origin: Vector2;
    Zoom: number;
    Rotation: number;

    constructor(myViewport: Vector2, myFocalPoint: Vector2,
    vector2Service: Vector2Service, vector3Service: Vector3Service, mtxService: MatrixService) {
        this.Viewport = myViewport;
        this.FocalPoint = myFocalPoint;
        this.ViewportDiv2 = new Vector2(this.Viewport.x / 2, this.Viewport.y / 2);
    }

    GetViewMatrix(parallax: Vector2): Matrix {
        this.LookAt(this.FocalPoint);

        const negativePositionVect = this.vector2Service.NegativeOf(this.Position);
        const negativePosByParallax = this.vector2Service.Multiply(negativePositionVect, parallax);
        const firstTranslation = this.vector3Service.CreateFromVector2(negativePosByParallax, 0);
        const trnsMtxFromNegativePosByParallax = this.mtxService.CreateTranslationFromVector3(firstTranslation);

        const negativeOriginVect2 = this.vector2Service.NegativeOf(this.Origin);
        const negativeOriginVect3 = this.vector3Service.CreateFromVector2(negativeOriginVect2, 0);
        const trnsMtxFromNegativeOrigin = this.mtxService.CreateTranslationFromVector3(negativeOriginVect3);


        const zoomVect3 = this.vector3Service.Create(this.Zoom, this.Zoom, 1);

        const positiveOriginVect3 = this.vector3Service.CreateFromVector2(this.Origin, 0);







        let result = this.mtxService.Multiply(trnsMtxFromNegativePosByParallax, trnsMtxFromNegativeOrigin);
        result = this.mtxService.Multiply(result, trnsMtxFromNegativeOrigin);


        return result;
        // const Mtx = this.mtxService.CreateTranslation(
        //    vector3Service.CreateFromVector2(-Position * parallax, 0));
    }


    LookAt(position: Vector2): void {
        this.Position = this.vector2Service.Subtract(position, this.ViewportDiv2);
    }
}
