import { Injectable } from '@angular/core';

@Injectable()
export class MathHelperService {

  constructor() { }


  Lerp(v1: number, v2: number, alpha: number) {

    // return v1 + (v2 - v1) * alpha;
    return (1 - alpha) * v1 + alpha * v2;
  }

}
