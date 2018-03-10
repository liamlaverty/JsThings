import { Component, OnInit } from '@angular/core';
import { Rectangle } from '../../models/rectangle';

@Component({
  selector: 'app-simple-canvas',
  templateUrl: './simple-canvas.component.html',
  styleUrls: ['./simple-canvas.component.css']
})
export class SimpleCanvasComponent implements OnInit {

  rectangles: Array<Rectangle>;

  constructor() {
    console.log('in simplecanvas');
  }

  ngOnInit() {
  }


  Draw() {
    console.log('drawing canvas');
  }
}
