import { Component, AfterViewInit } from '@angular/core';
import { ChildCanvasService } from './services/child-canvas.service';


@Component({
  selector: 'app-child-canvas',
  templateUrl: './child-canvas.component.html',
  styleUrls: ['./child-canvas.component.css']
})
export class ChildCanvasComponent implements AfterViewInit {
  private canvasName = 'canvas';

  constructor(private childCanvasService: ChildCanvasService) { }

  ngAfterViewInit(): void {
    this.setCanvasLayerDetails();
  }

  private setCanvasLayerDetails() {
    this.canvasName = this.canvasName + this.childCanvasService.getCanvasNumber();
  }

}
