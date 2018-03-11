import { Injectable } from '@angular/core';
import { Matrix } from './matrix.model';
import { Vector3 } from '../vector3/vector3.model';

@Injectable()
export class MatrixService {

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

}
