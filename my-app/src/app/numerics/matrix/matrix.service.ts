import { Injectable } from '@angular/core';
import { Matrix } from './matrix.model';
import { Vector3 } from '../vector3/vector3.model';

@Injectable()
export class MatrixService {
  private static IdentityMtx = new Matrix(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1);

  constructor() { }

  CreateTranslation(xPos: number, yPos: number, zPos: number): Matrix {
    let resultMtx: Matrix;
    resultMtx = this.CreateTranslationFromVector3(new Vector3(xPos, yPos, zPos));
    return resultMtx;
  }

  CreateTranslationFromVector3(position: Vector3): Matrix {
    let resultMtx: Matrix;

    resultMtx = new Matrix(
       1,
       0,
       0,
       0,
       0,
       1,
       0,
       0,
       0,
       0,
       1,
       0,
       position.X,
       position.Y,
       position.Z,
       1
    );
    return resultMtx;

  }

  Multiply(mtx1: Matrix, mtx2: Matrix): Matrix {

  }
  MultiplyByScaleFactor(mtx1: Matrix, scaleFactor: number): Matrix {

  }

  CreateRotationZ(radians: number): Matrix {

    const mtx1 = MatrixService.IdentityMtx;

    const cos1 = Math.cos(radians);
    const sin1 = Math.sin(radians);

    mtx1.M11 = cos1;
    mtx1.M12 = sin1;
    mtx1.M21 = -sin1;
    mtx1.M22 = cos1;

    return mtx1;
  }

}
