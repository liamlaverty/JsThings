import { Injectable } from '@angular/core';

@Injectable()
export class ChildCanvasService {
  private canvasCount = 0;
  getCanvasNumber(): number {
    const myCanvasCount: number = this.canvasCount;
    this.canvasCount++;
    return myCanvasCount;
  }
}
