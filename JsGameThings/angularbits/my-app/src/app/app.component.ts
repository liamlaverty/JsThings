import { Component } from '@angular/core';
import { AfterViewInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular Apps';


  rectW: number = 100;
  rectH: number = 100;
  rectColor: string = '#FF0000';
  context: CanvasRenderingContext2D;

  @ViewChild('mycanvas') myCanvas;

  ngAfterViewInit() {
    let keyPress = document.addEventListener('keydown', this.keyDownHappened);
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.tick();
  }

 

  tick() {
    requestAnimationFrame(() => {
      this.tick();
    });

    let ctx = this.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = this.rectColor;
    ctx.fillRect(0, 0, this.rectW, this.rectH);
  }




  keyDownHappened(event) {
    console.log('event pressed was code [' + event.keyCode + ']');
    let message = 'key [';
    if (event.keyCode == 37) {
      message += 'left';
    }
    if (event.keyCode == 39) {
      message += 'right';
    }
    if (event.keyCode == 38) {
      message += 'up';
    }
    if (event.keyCode == 40) {
      message += 'down';
    }
    message += '] was pressed';

    console.log(message);
  }
}
