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
       1, 0, 0, 0,
       0, 1, 0, 0,
       0, 0, 1, 0,
       position.X, position.Y, position.Z, 1);
      return resultMtx;
  }

  Add(mtx1: Matrix, mtx2: Matrix): Matrix {
    mtx1.M11 = mtx1.M11 + mtx2.M11;
    mtx1.M12 = mtx1.M12 + mtx2.M12;
    mtx1.M13 = mtx1.M13 + mtx2.M13;
    mtx1.M14 = mtx1.M14 + mtx2.M14;
    mtx1.M21 = mtx1.M21 + mtx2.M21;
    mtx1.M22 = mtx1.M22 + mtx2.M22;
    mtx1.M23 = mtx1.M23 + mtx2.M23;
    mtx1.M24 = mtx1.M24 + mtx2.M24;
    mtx1.M31 = mtx1.M31 + mtx2.M31;
    mtx1.M32 = mtx1.M32 + mtx2.M32;
    mtx1.M33 = mtx1.M33 + mtx2.M33;
    mtx1.M34 = mtx1.M34 + mtx2.M34;
    mtx1.M41 = mtx1.M41 + mtx2.M41;
    mtx1.M42 = mtx1.M42 + mtx2.M42;
    mtx1.M43 = mtx1.M43 + mtx2.M43;
    mtx1.M44 = mtx1.M44 + mtx2.M44;
    return mtx1;
  }

  Subtract(mtx1: Matrix, mtx2: Matrix): Matrix {
    mtx1.M11 = mtx1.M11 - mtx2.M11;
    mtx1.M12 = mtx1.M12 - mtx2.M12;
    mtx1.M13 = mtx1.M13 - mtx2.M13;
    mtx1.M14 = mtx1.M14 - mtx2.M14;
    mtx1.M21 = mtx1.M21 - mtx2.M21;
    mtx1.M22 = mtx1.M22 - mtx2.M22;
    mtx1.M23 = mtx1.M23 - mtx2.M23;
    mtx1.M24 = mtx1.M24 - mtx2.M24;
    mtx1.M31 = mtx1.M31 - mtx2.M31;
    mtx1.M32 = mtx1.M32 - mtx2.M32;
    mtx1.M33 = mtx1.M33 - mtx2.M33;
    mtx1.M34 = mtx1.M34 - mtx2.M34;
    mtx1.M41 = mtx1.M41 - mtx2.M41;
    mtx1.M42 = mtx1.M42 - mtx2.M42;
    mtx1.M43 = mtx1.M43 - mtx2.M43;
    mtx1.M44 = mtx1.M44 - mtx2.M44;
    return mtx1;
  }

  Multiply(mtx1: Matrix, mtx2: Matrix): Matrix {
    const m11 = (((mtx1.M11 * mtx2.M11) + (mtx1.M12 * mtx2.M21)) + (mtx1.M13 * mtx2.M31)) + (mtx1.M14 * mtx2.M41);
    const m12 = (((mtx1.M11 * mtx2.M12) + (mtx1.M12 * mtx2.M22)) + (mtx1.M13 * mtx2.M32)) + (mtx1.M14 * mtx2.M42);
    const m13 = (((mtx1.M11 * mtx2.M13) + (mtx1.M12 * mtx2.M23)) + (mtx1.M13 * mtx2.M33)) + (mtx1.M14 * mtx2.M43);
    const m14 = (((mtx1.M11 * mtx2.M14) + (mtx1.M12 * mtx2.M24)) + (mtx1.M13 * mtx2.M34)) + (mtx1.M14 * mtx2.M44);
    const m21 = (((mtx1.M21 * mtx2.M11) + (mtx1.M22 * mtx2.M21)) + (mtx1.M23 * mtx2.M31)) + (mtx1.M24 * mtx2.M41);
    const m22 = (((mtx1.M21 * mtx2.M12) + (mtx1.M22 * mtx2.M22)) + (mtx1.M23 * mtx2.M32)) + (mtx1.M24 * mtx2.M42);
    const m23 = (((mtx1.M21 * mtx2.M13) + (mtx1.M22 * mtx2.M23)) + (mtx1.M23 * mtx2.M33)) + (mtx1.M24 * mtx2.M43);
    const m24 = (((mtx1.M21 * mtx2.M14) + (mtx1.M22 * mtx2.M24)) + (mtx1.M23 * mtx2.M34)) + (mtx1.M24 * mtx2.M44);
    const m31 = (((mtx1.M31 * mtx2.M11) + (mtx1.M32 * mtx2.M21)) + (mtx1.M33 * mtx2.M31)) + (mtx1.M34 * mtx2.M41);
    const m32 = (((mtx1.M31 * mtx2.M12) + (mtx1.M32 * mtx2.M22)) + (mtx1.M33 * mtx2.M32)) + (mtx1.M34 * mtx2.M42);
    const m33 = (((mtx1.M31 * mtx2.M13) + (mtx1.M32 * mtx2.M23)) + (mtx1.M33 * mtx2.M33)) + (mtx1.M34 * mtx2.M43);
    const m34 = (((mtx1.M31 * mtx2.M14) + (mtx1.M32 * mtx2.M24)) + (mtx1.M33 * mtx2.M34)) + (mtx1.M34 * mtx2.M44);
    const m41 = (((mtx1.M41 * mtx2.M11) + (mtx1.M42 * mtx2.M21)) + (mtx1.M43 * mtx2.M31)) + (mtx1.M44 * mtx2.M41);
    const m42 = (((mtx1.M41 * mtx2.M12) + (mtx1.M42 * mtx2.M22)) + (mtx1.M43 * mtx2.M32)) + (mtx1.M44 * mtx2.M42);
    const m43 = (((mtx1.M41 * mtx2.M13) + (mtx1.M42 * mtx2.M23)) + (mtx1.M43 * mtx2.M33)) + (mtx1.M44 * mtx2.M43);
    const m44 = (((mtx1.M41 * mtx2.M14) + (mtx1.M42 * mtx2.M24)) + (mtx1.M43 * mtx2.M34)) + (mtx1.M44 * mtx2.M44);
    mtx1.M11 = m11;
    mtx1.M12 = m12;
    mtx1.M13 = m13;
    mtx1.M14 = m14;
    mtx1.M21 = m21;
    mtx1.M22 = m22;
    mtx1.M23 = m23;
    mtx1.M24 = m24;
    mtx1.M31 = m31;
    mtx1.M32 = m32;
    mtx1.M33 = m33;
    mtx1.M34 = m34;
    mtx1.M41 = m41;
    mtx1.M42 = m42;
    mtx1.M43 = m43;
    mtx1.M44 = m44;
    return mtx1;
  }
  MultiplyByScaleFactor(mtx1: Matrix, scaleFactor: number): Matrix {
    mtx1.M11 *= scaleFactor;
    mtx1.M12 *= scaleFactor;
    mtx1.M13 *= scaleFactor;
    mtx1.M14 *= scaleFactor;
    mtx1.M21 *= scaleFactor;
    mtx1.M22 *= scaleFactor;
    mtx1.M23 *= scaleFactor;
    mtx1.M24 *= scaleFactor;
    mtx1.M31 *= scaleFactor;
    mtx1.M32 *= scaleFactor;
    mtx1.M33 *= scaleFactor;
    mtx1.M34 *= scaleFactor;
    mtx1.M41 *= scaleFactor;
    mtx1.M42 *= scaleFactor;
    mtx1.M43 *= scaleFactor;
    mtx1.M44 *= scaleFactor;
    return mtx1;
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

  CreateScale(x: number, y: number, z: number): Matrix {
    const scaleVec3 = new Vector3(x, y, z);
    return this.CreateScaleFromVec3(scaleVec3);
  }

  CreateScaleFromVec3(scaleVect: Vector3): Matrix {
    const resultMtx = new Matrix(
      scaleVect.X, 0, 0, 0,
      0, scaleVect.Y, 0, 0,
      0, 0, scaleVect.Z, 0,
      0, 0, 0, 1
    );
    return resultMtx;
  }

  Negate(mtx: Matrix): Matrix {
    mtx.M11 = -mtx.M11;
    mtx.M12 = -mtx.M12;
    mtx.M13 = -mtx.M13;
    mtx.M14 = -mtx.M14;
    mtx.M21 = -mtx.M21;
    mtx.M22 = -mtx.M22;
    mtx.M23 = -mtx.M23;
    mtx.M24 = -mtx.M24;
    mtx.M31 = -mtx.M31;
    mtx.M32 = -mtx.M32;
    mtx.M33 = -mtx.M33;
    mtx.M34 = -mtx.M34;
    mtx.M41 = -mtx.M41;
    mtx.M42 = -mtx.M42;
    mtx.M43 = -mtx.M43;
    mtx.M44 = -mtx.M44;

    return mtx;
  }

}
