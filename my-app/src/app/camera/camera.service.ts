import { Injectable } from '@angular/core';
import { Camera } from './camera.model';
import { Vector2 } from '../numerics/vector2/vector2.model';

@Injectable()
export class CameraService {

  cameraCreated: boolean;
  theCamera: Camera;

  constructor() { }

  CreateCamera(size: Vector2, focalPointPosition: Vector2) {
    if (!this.cameraCreated) {
      this.theCamera = new Camera(size, focalPointPosition);
    } else {
      console.error('camera is being created more than once! This is widely considered to be a very bad thing');
    }
    return this.GetCamera();
  }

  GetCamera() {
    console.log('returning a camera');
    return this.theCamera;
  }

}
