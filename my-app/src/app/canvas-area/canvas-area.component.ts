import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { GameRectangle } from '../models/game-rectangle';
import { RECTANGLES } from '../mock-rectangles';
import { Rectangle } from '../models/rectangle';
import { KeyUpComponentComponent } from '../key-up-component/key-up-component.component';

@Component({
  selector: 'app-canvas-area',
  templateUrl: './canvas-area.component.html',
  styleUrls: ['./canvas-area.component.css']
})
export class CanvasAreaComponent implements OnInit, AfterViewInit {
  @ViewChild(KeyUpComponentComponent)
  private keyUpComponentComponent: KeyUpComponentComponent;

  rectangles = RECTANGLES;
  selectedRectangle: GameRectangle;

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
      this.keyUpComponentComponent.inputTick();
    });

    const ctx = this.context;

    this.Draw(ctx);
  }

  Draw(ctx, doGreedyClearScreen: boolean = true) {
    console.log('drawing');
    if (doGreedyClearScreen) {
      this.greedyClearScreen(ctx);
    }
    for (const rectangle of this.rectangles) {
      ctx.fillStyle = rectangle.color;
      ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
  }

  greedyClearScreen(ctx) {
    ctx.clearRect(0, 0, 400, 400);
  }
}
