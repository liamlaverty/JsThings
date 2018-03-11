import { Injectable } from '@angular/core';
import { Vector3 } from './vector3.model';

@Injectable()
export class Vector3Service {
  private static readonly zero: Vector3 = new Vector3(0, 0, 0);
  private static readonly one: Vector3 = new Vector3(1, 1, 1);
  private static readonly unitX: Vector3 = new Vector3(1, 0, 0);
  private static readonly unitY: Vector3 = new Vector3(0, 1, 0);
  private static readonly unitZ: Vector3 = new Vector3(0, 0, 1);
  private static readonly up: Vector3 = new Vector3(0, 1, 0);
  private static readonly down: Vector3 = new Vector3(0, -1, 0);
  private static readonly right: Vector3 = new Vector3(1, 0, 0);
  private static readonly left: Vector3 = new Vector3(-1, 0, 0);
  private static readonly forward: Vector3 = new Vector3(0, 0, -1);
  private static readonly backward: Vector3 = new Vector3(0, 0, 1);

  constructor() { }


  add(left: Vector3, right: Vector3) {
    const myX = left.X + right.X;
    const myY = left.Y + right.Y;
    const myZ = left.Z + right.Z;
    return new Vector3(myX, myY, myZ);
  }

  Zero(): Vector3 {
    return Vector3Service.zero;
  }

  One(): Vector3 {
    return Vector3Service.one;
  }

  UnitX(): Vector3 {
    return Vector3Service.unitX;
  }

  UnitY(): Vector3 {
    return Vector3Service.unitY;
  }

  UnitZ(): Vector3 {
    return Vector3Service.unitZ;
  }

  Up(): Vector3 {
    return Vector3Service.up;
  }

  Down(): Vector3 {
    return Vector3Service.down;
  }

  Right(): Vector3 {
    return Vector3Service.right;
  }

  Left(): Vector3 {
    return Vector3Service.left;
  }

  Forward(): Vector3 {
    return Vector3Service.forward;
  }

  Backward(): Vector3 {
    return Vector3Service.backward;
  }

}
