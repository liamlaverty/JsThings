import { Component, AfterViewInit } from '@angular/core';
import { ChildCanvasService } from './services/child-canvas.service';
import { SimpleCanvasComponent } from '../simple-canvas/simple-canvas.component';
import { BrowserService } from '../browser.service';
import { MathHelperService } from '../../numerics/math-helper/math-helper.service';


@Component({
  selector: 'app-child-canvas',
  templateUrl: './child-canvas.component.html',
  styleUrls: ['./child-canvas.component.css'],
  providers: [ MathHelperService ]
})
export class ChildCanvasComponent extends SimpleCanvasComponent implements AfterViewInit {
  private canvasName = 'canvas';

  constructor(protected browserService: BrowserService,
    private childCanvasService: ChildCanvasService) {
    super(browserService);
  }

  ngAfterViewInit(): void {
    this.abstAfterViewInit();
    this.setCanvasLayerDetails();
    console.log(`child class [name:'${this.canvasName}'] ngAfterViewInit`);
    
  }

  private setCanvasLayerDetails() {
    this.canvasName = this.canvasName + this.childCanvasService.getCanvasNumber();
  }

}
