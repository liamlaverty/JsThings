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

  /*
  * divides the first vector by the second
  * this is not scalar division
  */
  Divide(left: Vector2, right: Vector2): Vector2 {
    console.log('Divide not implemented for Vector2s');

    const vecX = 0;
    const vecY = 0;

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
}
