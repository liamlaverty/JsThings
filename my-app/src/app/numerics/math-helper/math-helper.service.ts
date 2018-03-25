import { Injectable } from '@angular/core';
import { Vector2 } from '../vector2/vector2.model';
import { Rectangle } from '../../models/rectangle';
import { AABB } from '../../physics/models/physical-entity.model';

@Injectable()
export class MathHelperService {

  constructor() { }


  GetAABB(position: Vector2, size: Vector2): AABB {
    const myAABB = new AABB();

         myAABB.min = new Vector2(position.x, position.y);
         myAABB.max = new Vector2(
           position.x + size.x,
           position.y + size.y);
         return myAABB;
  }

  // checks if two AABBs intersect (rectangle only)
  AabbVsAabb(left: AABB, right: AABB) {
    if ((left.max.x < right.min.x) || (left.min.x > right.max.x)) {
       return false;
    }
    if ((left.max.y < right.min.y) || (left.min.y > right.max.y)) {
       return false;
    }

    return true;
  }

  Lerp(v1: number, v2: number, alpha: number) {
    return (1 - alpha) * v1 + alpha * v2;
  }


  RectanglesIntersect(left: Rectangle, right: Rectangle): boolean {
    if (this.GetRectLeft(left) > this.GetRectRight(right)) {
      return false;
    }
    if (this.GetRectRight(left) < this.GetRectLeft(right)) {
      return false;
    }

    if (this.GetRectTop(left) > this.GetRectBottom(right)) {
      return false;
    }
    if (this.GetRectBottom(left) < this.GetRectTop(right)) {
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
