import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Rectangle } from '../../models/rectangle';

@Component({
  selector: 'app-simple-canvas',
  templateUrl: './simple-canvas.component.html',
  styleUrls: ['./simple-canvas.component.css']
})
export abstract class SimpleCanvasComponent implements OnInit {
  @ViewChild('mySimpleCanvas') mySimpleCanvas;
  rectangles: Array<Rectangle>;
  ctx;
  canvasHeight: number;
  canvasWidth: number;

  constructor() {
    console.log('in simplecanvas');
  }

  ngOnInit() {
  }

  myAfterViewInit() {
    console.log('abstract class ngAfterViewInit');
    const canvas = this.mySimpleCanvas.nativeElement;
    this.canvasHeight = canvas.offsetHeight;
    this.canvasWidth = canvas.offsetWidth;
    this.ctx = canvas.getContext('2d');

    console.log('canvas setup with height [' + this.canvasHeight + '], width [' + this.canvasWidth + ']');
  }

  GetContext() {
    return this.ctx;
  }

  Draw() {
    console.log('drawing canvas');
  }

  protected greedyClearCanvas() {
    this.GetContext().clearRect(0, 0, this.canvasHeight, this.canvasWidth);
  }
}
