import { Injectable } from '@angular/core';

@Injectable()
export class ChildCanvasService {

  private answer = 42;

  giveMeTheAnswer() {
    return this.answer;
  }

}
