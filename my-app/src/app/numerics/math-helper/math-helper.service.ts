import { Injectable } from '@angular/core';

@Injectable()
export class MathHelperService {

  constructor() { }


  Lerp(v0: number, v1: number, alpha: number) {
    return (1 - alpha) * v0 + alpha * v1;
  }

}
