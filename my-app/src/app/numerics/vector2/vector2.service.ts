import { Injectable } from '@angular/core';
import { Vector2 } from './vector2.model';

@Injectable()
export class Vector2Service {

  constructor() { }

  /*
  * adds two Vector2 together and returns a new Vector2
  * containing the results
  */
  Add(left: Vector2, right: Vector2): Vector2 {
    const vecX = left.x + right.x;
    const vecY = left.y + right.y;

    return new Vector2(vecX, vecY);
  }

  CompareEquality(left: Vector2, right: Vector2): boolean {
    return left.x !== right.x || left.y !== right.y;
  }

  /*
  * divides the first vector by the second
  * this is not scalar division
  */
  Divide(left: Vector2, right: Vector2): Vector2 {
    const vecX = left.x / right.x;
    const vecY = left.y / right.y;
    return new Vector2(vecX, vecY);
  }

  /*
  * divides a given source vector2 by a scale factor
  */
  DivideByScale(source: Vector2, scaleFactor: number): Vector2 {
    const factor: number = 1 / scaleFactor;

    const vecX = source.x * factor;
    const vecY = source.y * factor;
    return new Vector2(vecX, vecY);
  }

  /*
  * gets the dot product of two vectors,
  * returns as a number (float?)
  */
  Dot(left: Vector2, right: Vector2): number {

    const vecX = left.x * right.x;
    const vecY = left.y * right.y;

    return vecX + vecY;
  }

  Subtract(left: Vector2, right: Vector2): Vector2 {
      const vecX = left.x - right.x;
      const vecY = left.y - right.y;

      return new Vector2(vecX, vecY);
  }

  NegativeOf(source: Vector2) {
    const vecX = -source.x;
    const vecY = -source.y;
    return new Vector2(vecX, vecY);
  }

  Multiply(left: Vector2, right: Vector2) {
    const vecX = left.x * right.x;
    const vecY = left.y * right.y;
    return new Vector2(vecX, vecY);
  }
  MultiplyByScale(source: Vector2, scaleFactor: number) {
    const vecX = source.x * scaleFactor;
    const vecY = source.y * scaleFactor;
    return new Vector2(vecX, vecY);
  }
}
