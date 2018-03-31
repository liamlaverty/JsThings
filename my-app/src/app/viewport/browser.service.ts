import { Injectable } from '@angular/core';

@Injectable()
export class BrowserService {

  constructor() { }

  getBrowserWidth(): number {
    console.log('getting innerWidth of ' + window.innerWidth);
    return window.innerWidth;
  }

  getBrowserHeight(): number {
    console.log('getting innherHeight of ' + window.innerHeight);
    return window.innerWidth;
  }
}
