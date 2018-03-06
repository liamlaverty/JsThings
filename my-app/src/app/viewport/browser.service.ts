import { Injectable } from '@angular/core';

@Injectable()
export class BrowserService {

  constructor() { }

  getBrowserWidth(): number {
    return window.innerWidth;
  }

  getBrowserHeight(): number {
    return window.innerHeight;
  }
}
