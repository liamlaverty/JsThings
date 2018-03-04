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

  context: CanvasRenderingContext2D;
  ticks: number;

  @ViewChild('mycanvas') myCanvas;

  constructor() {
  }

  ngOnInit() {
    console.log('Canvas onInit');
  }

  ngAfterViewInit() {
    const keyPress = document.addEventListener('keydown', this.keyDownHappened);
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    this.ticks  = 0;

    this.tick();
  }


  tick() {
    this.ticks++;
    requestAnimationFrame(() => {
      this.tick();
    });

    const ctx = this.context;
    this.clearScreen(ctx);

    for (const rectangle of this.rectangles) {
      ctx.fillStyle = rectangle.color;
      ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
  }

  clearScreen(ctx) {
    ctx.clearRect(0, 0, 400, 400);
  }

  keyDownHappened(event) {
    console.log('event pressed was code [' + event.keyCode + ']');
    let message = '';
    if (event.keyCode === 37) {
      message += 'left';
    }
    if (event.keyCode === 39) {
      message += 'right';
    }
    if (event.keyCode === 38) {
      message += 'up';
    }
    if (event.keyCode === 40) {
      message += 'down';
    }
    message = 'key [' + message + '] was pressed';
    console.log(message);
    // this.handleInput(event.keyCode);
  }

}
