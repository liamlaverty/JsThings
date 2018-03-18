import { Injectable } from '@angular/core';
import { Vector2 } from '../vector2/vector2.model';
import { Rectangle } from '../../models/rectangle';

@Injectable()
export class MathHelperService {

  constructor() { }


  Lerp(v1: number, v2: number, alpha: number) {

    // return v1 + (v2 - v1) * alpha;
    return (1 - alpha) * v1 + alpha * v2;
  }


  RectanglesIntersect(left: Rectangle, right: Rectangle): boolean {
    if (this.GetRectLeft(left) > this.GetRectRight(right)) {
      // console.log('object intersection failed at left check (left.left was[' + this.GetRectLeft(left) +
      //  '] | right.right was[' + this.GetRectRight(right) + ']');
      return false;
    }
    if (this.GetRectRight(left) < this.GetRectLeft(right)) {
      // console.log('object intersection failed at right check (left.right was[' + this.GetRectRight(left) +
      //   '] | right.left was[' + this.GetRectLeft(right) + ']');
      return false;
    }

    if (this.GetRectTop(left) > this.GetRectBottom(right)) {
      // console.log('object intersection failed at top check');
      return false;
    }
    if (this.GetRectBottom(left) < this.GetRectTop(right)) {
      // console.log('object intersection failed at bottom check');
      return false;
    }

    // if it gets to here, it must be on the screen
    // console.log('object intersects');
    return true;
  }


  GetRectLeft(rectangle: Rectangle) {
    return rectangle.position.x;
  }

  GetRectRight(rectangle: Rectangle) {
    return rectangle.position.x + rectangle.size.x;
  }

  GetRectTop(rectangle: Rectangle) {
    return rectangle.position.y;
    // return this.GetVectorPairTop(rectangle.position, rectangle.size);
  }

  GetVectorPairTop(position: Vector2, size: Vector2) {
    return position.y;
  }

  GetRectBottom(rectangle: Rectangle) {
    return this.GetVectorPairBottom(rectangle.position, rectangle.size);
  }

  GetVectorPairBottom(position: Vector2, size: Vector2) {
    return position.y + size.y;
  }
}
