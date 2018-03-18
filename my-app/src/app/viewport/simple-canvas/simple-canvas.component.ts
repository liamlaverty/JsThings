import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { BrowserService } from '../browser.service';
import { GameRectangle } from '../../models/game-rectangle';
import { Layer } from '../../models/layer.model';
import { CameraService } from '../../camera/camera.service';
import { Matrix } from '../../numerics/matrix/matrix.model';
import { MatrixService } from '../../numerics/matrix/matrix.service';
import { Vector2 } from '../../numerics/vector2/vector2.model';

@Component({
  selector: 'app-simple-canvas',
  templateUrl: './simple-canvas.component.html',
  styleUrls: ['./simple-canvas.component.css'],
  providers: [BrowserService, MatrixService]
})
export abstract class SimpleCanvasComponent implements OnInit {
  private AspectRatio = 1;
  @ViewChild('mySimpleCanvas') mySimpleCanvas;
  rectangles: Array<GameRectangle>;
  ctx: CanvasRenderingContext2D;
  canvasHeight: number;
  canvasWidth: number;
  layer: Layer;
  private browserHeight: number;
  private browserWidth: number;
  viewportWidth: number;
  viewportHeight: number;
  private cameraService: CameraService;
  private matrixService: MatrixService;

  constructor(protected browserService: BrowserService) {
    console.log('in simplecanvas');
    this.matrixService = new MatrixService();
    this.cameraService = new CameraService();
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

  Draw(cameraPosition: Vector2, cameraFocalPoint: Vector2, transformMatrix?: Matrix) {
    if (transformMatrix == null) { transformMatrix = this.matrixService.GetIdentityMtx(); }

    this.greedyClearCanvas();
    if (this.layer.Rectangles !== undefined) {


        for (const rectangle of this.layer.Rectangles) {
          if (this.RectIsOnScreen(rectangle, cameraPosition, cameraFocalPoint)) {

            this.ctx.fillStyle = rectangle.color;
            this.ctx.fillRect(rectangle.position.x, rectangle.position.y, rectangle.size.x, rectangle.size.y);
          }
        }
      // }
    }
  }

  protected RectIsOnScreen(theRect: GameRectangle, cameraPosition: Vector2, cameraOrigin: Vector2) {
    return true;

    // if the top of the rectangle is above the bottom of the camera

    // if (theRect.position.y )

   // }

    // if the left of the rectangle is to the left of the right of the camera

    // if the right of the rectangle is the right of the left of the camera

    // if the bottom of the rectangle is below the top of the camera

  }


  protected greedyClearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
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

    this.viewportHeight = ((this.browserHeight / 100) * heightPercent);

    // this.viewportWidth = ((this.browserWidth / 100) * widthPercent);
    this.viewportWidth = (this.viewportHeight * (this.AspectRatio));
    console.log('height is ' + this.viewportHeight);

    //
  }
}
