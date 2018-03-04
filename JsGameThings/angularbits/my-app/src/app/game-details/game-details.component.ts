import { Component, OnInit } from '@angular/core';
import { Rectangle } from '../rectangle';
import { RECTANGLES } from '../mock-rectangles';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  rectangles = RECTANGLES;
  selectedRectangle: Rectangle;

  constructor() { }

  ngOnInit() {
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
