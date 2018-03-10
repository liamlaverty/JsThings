import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { BrowserService } from '../browser.service';
import { GameRectangle } from '../../models/game-rectangle';
import { Layer } from '../../models/layer.model';

@Component({
  selector: 'app-simple-canvas',
  templateUrl: './simple-canvas.component.html',
  styleUrls: ['./simple-canvas.component.css'],
  providers: [BrowserService]
})
export abstract class SimpleCanvasComponent implements OnInit {
  @ViewChild('mySimpleCanvas') mySimpleCanvas;
  rectangles: Array<GameRectangle>;
  ctx: CanvasRenderingContext2D;
  canvasHeight: number;
  canvasWidth: number;
  layer: Layer;
  private browserHeight: number;
  private browserWidth: number;
  private viewportWidth: number;
  private viewportHeight: number;

  constructor(protected browserService: BrowserService) {
    console.log('in simplecanvas');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateBrowserSize();
    // console.log('updated browser size');
  }


  ngOnInit() {
    this.absOnInit();
  }

  absOnInit() {
    this.updateBrowserSize();

  }

  abstAfterViewInit() {
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
    this.greedyClearCanvas();
    // console.log('drawing abstract canvas');
    if (this.layer.Rectangles !== undefined) {
    for (const rectangle of this.layer.Rectangles) {
      this.ctx.fillStyle = rectangle.color;
      this.ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
  }

  }

  protected greedyClearCanvas() {
    this.GetContext().clearRect(0, 0, this.canvasHeight, this.canvasWidth);
  }


  updateBrowserSize() {
    this.SetBrowserWidth();
    this.SetBrowserHeight();
    this.UpdateCanvasSize(80, 80); // 80% of window size
  }


  private SetBrowserHeight(): void {
    this.browserHeight = this.browserService.getBrowserHeight();

  }
  private SetBrowserWidth(): void {
    this.browserWidth = this.browserService.getBrowserWidth();
  }

  private UpdateCanvasSize(heightPercent: number, widthPercent: number) {
    this.viewportHeight = 600; // ((this.browserHeight / 100) * heightPercent);
    this.viewportWidth = 800; // ((this.browserWidth / 100) * widthPercent);

  }
}
