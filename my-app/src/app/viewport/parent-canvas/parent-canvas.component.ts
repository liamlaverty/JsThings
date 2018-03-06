import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-canvas',
  templateUrl: './parent-canvas.component.html',
  styleUrls: ['./parent-canvas.component.css']
})
export class ParentCanvasComponent implements OnInit {

  SetBrowserHeight(): any {
    throw new Error('Method not implemented.');
  }
  SetBrowserWidth(): any {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  ngOnInit() {
    this.FitToBrowser();
  }

  FitToBrowser() {
    this.SetBrowserWidth();
    this.SetBrowserHeight();
  }

}
