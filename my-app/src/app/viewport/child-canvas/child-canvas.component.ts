import { Component, AfterViewInit } from '@angular/core';
import { ChildCanvasService } from './services/child-canvas.service';
import { SimpleCanvasComponent } from '../simple-canvas/simple-canvas.component';
import { BrowserService } from '../browser.service';


@Component({
  selector: 'app-child-canvas',
  templateUrl: './child-canvas.component.html',
  styleUrls: ['./child-canvas.component.css']
})
export class ChildCanvasComponent extends SimpleCanvasComponent implements AfterViewInit {
  private canvasName = 'canvas';

  constructor(protected browserService: BrowserService,
    private childCanvasService: ChildCanvasService) {
    super(browserService);
  }

  ngAfterViewInit(): void {
    this.abstAfterViewInit();
    console.log('child class ngAfterViewInit');
    this.setCanvasLayerDetails();
  }

  private setCanvasLayerDetails() {
    this.canvasName = this.canvasName + this.childCanvasService.getCanvasNumber();
  }

}
