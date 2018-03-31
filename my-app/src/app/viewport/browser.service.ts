import { Injectable } from '@angular/core';

@Injectable()
export class BrowserService {

  private viewportWidth;
  private viewportHeight;

  constructor() {
    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;
  }

  getBrowserWidth(evt?): number {
    if (evt !== null && evt !== undefined) {
      this.viewportWidth = Math.floor(evt.target.innerWidth);
    }
    console.log('getting innerWidth of ' + this.viewportWidth);
    return this.viewportWidth;
  }

  getBrowserHeight(evt?): number {
    if (evt !== null && evt !== undefined) {
      this.viewportHeight = Math.floor(evt.target.innerHeight);
    }
    console.log('getting innherHeight of ' + this.viewportHeight);
    return this.viewportHeight;
  }
}
