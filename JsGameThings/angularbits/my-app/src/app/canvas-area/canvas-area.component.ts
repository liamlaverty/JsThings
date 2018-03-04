import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Rectangle } from '../rectangle';
import { RECTANGLES } from '../mock-rectangles';

@Component({
  selector: 'app-canvas-area',
  templateUrl: './canvas-area.component.html',
  styleUrls: ['./canvas-area.component.css']
})
export class CanvasAreaComponent implements OnInit, AfterViewInit {

  rectangles = RECTANGLES;
  selectedRectangle: Rectangle;

  context: CanvasRenderingContext2D;
  ticks = 0;

  @ViewChild('mycanvas') myCanvas;

  constructor() {
  }

   ngOnInit() {
     console.log('Canvas onInit');
  }

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    this.ticks = 0;
    this.tick();
  }


  tick(): void {
    setTimeout(() => {
       this.ticks++;
    });
    requestAnimationFrame(() => {
      this.tick();
    });

    const ctx = this.context;
    this.greedyClearScreen(ctx);

    // if (this.ticks % 10 === 0) {
      for (const rectangle of this.rectangles) {
        // console.log('fillstyle will be ' + rectangle.color);
        ctx.fillStyle = rectangle.color;
        ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        // ctx.globalCompositeOperation = 'destination-over';
      }
    // ctx.globalCompositeOperation = 'source-over';
    // }
  }

  greedyClearScreen(ctx) {
    ctx.clearRect(0, 0, 400, 400);
  }

  onSelect(rectangle: Rectangle): void {
    console.log('selected ' + rectangle.id);
    this.selectedRectangle = rectangle;
    for (const singleRectangle of this.rectangles) {
      if (singleRectangle.id === this.selectedRectangle.id) {
        rectangle.color = '#ff0000';
      } else {
        rectangle.color = '#000';
      }
    }
  }
}
