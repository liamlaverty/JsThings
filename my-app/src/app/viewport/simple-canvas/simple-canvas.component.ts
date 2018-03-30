import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { BrowserService } from '../browser.service';
import { GameRectangle } from '../../models/game-rectangle';
import { Layer } from '../../models/layer.model';
import { CameraService } from '../../camera/camera.service';
import { Matrix } from '../../numerics/matrix/matrix.model';
import { MatrixService } from '../../numerics/matrix/matrix.service';
import { Vector2 } from '../../numerics/vector2/vector2.model';
import { MathHelperService } from '../../numerics/math-helper/math-helper.service';
import { Rectangle } from '../../models/rectangle';

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
  private mathHelperService: MathHelperService;

  constructor(protected browserService: BrowserService) {
    console.log('in simplecanvas');
    this.matrixService = new MatrixService();
    this.cameraService = new CameraService();
    this.mathHelperService = new MathHelperService();
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

  Draw(cameraPosition: Vector2, cameraSize: Vector2, transformMatrix?: Matrix) {
    if (transformMatrix == null) { transformMatrix = this.matrixService.GetIdentityMtx(); }

    this.greedyClearCanvas();
    if (this.layer.Rectangles !== undefined) {
      const cameraRect = new Rectangle();
      cameraRect.position = cameraPosition;
      cameraRect.size = cameraSize;

      for (const rectangle of this.layer.Rectangles) {
        if (this.RectIsOnScreen(rectangle, cameraRect)) {

          const rectRelativeToCamera = this.GetRectRelativeToCamera(rectangle, cameraRect);

          // pattern: CanvasPattern;
          if (rectangle.texture !== null && rectangle.texture !== undefined && rectangle.texture.length > 0) {

            const image = new Image(rectangle.size.x, rectangle.size.y);
             const drawable = image.onload = function() {
              //  const thisTexture = document.createElement('canvas');
              //  thisTexture.width = rectRelativeToCamera.size.x;
              //  thisTexture.height = rectRelativeToCamera.size.y;
              //  thisTexture.getContext('2d').drawImage(image, 0, 0, rectangle.size.x, rectangle.size.y);
             };
             image.src = rectangle.texture;

            const pattern = this.ctx.drawImage(image, rectRelativeToCamera.position.x, rectRelativeToCamera.position.y,
              rectRelativeToCamera.size.x, rectRelativeToCamera.size.y);
             // this.ctx.fillStyle = pattern;

          } else {
            if (rectangle.overrideColor !== null) {
              this.ctx.fillStyle = rectangle.overrideColor;
              rectangle.overrideColor = null;
            } else {
              this.ctx.fillStyle = rectangle.color;
            }
            this.ctx.fillRect(rectRelativeToCamera.position.x, rectRelativeToCamera.position.y,
            rectRelativeToCamera.size.x, rectRelativeToCamera.size.y);
          }
          // this.ctx.fillRect(rectangle.position.x, rectangle.position.y, rectangle.size.x, rectangle.size.y);
        }
      }
      // }
    }
  }

  protected GetRectRelativeToCamera(theRect: GameRectangle, cameraRect: Rectangle) {
    const returnRect = new Rectangle();

    returnRect.size = new Vector2(theRect.size.x, theRect.size.y);
    returnRect.position = new Vector2(-cameraRect.position.x, -cameraRect.position.y);

    returnRect.position.x += theRect.position.x;
    returnRect.position.y += theRect.position.y;

    return returnRect;

  }

  protected RectIsOnScreen(theRect: GameRectangle, cameraRect: Rectangle) {

    if (theRect.name !== 'person') {
      return true;
    }

    // console.log('cam pos: ' + cameraRect.position.concat());
    // console.log('cam size: ' + cameraRect.size.concat());

    if (this.mathHelperService.RectanglesIntersect(theRect, cameraRect)) {
      // console.log('shoudl draw rectangle [id: ' + theRect.id + ' |name:' + theRect.name + ']');
      return true;
    } else {
      // console.log('this rectangle is definitely not on screen');
      return false;
      // return false;
    }

    // const rectBottom = this.mathHelperService.GetRectBottom(theRect);
    // const rectTop = this.mathHelperService.GetRectBottom(theRect);
    // const rectLeft = this.mathHelperService.GetRectBottom(theRect);
    // const rectRight = this.mathHelperService.GetRectBottom(theRect);

    // const camBottom = this.mathHelperService.GetRectBottom(cameraRect);
    // const camTop = this.mathHelperService.GetRectBottom(cameraRect);
    // const camLeft = this.mathHelperService.GetRectBottom(cameraRect);
    // const camRight = this.mathHelperService.GetRectBottom(cameraRect);

    // if the top of the rectangle is above the bottom of the camera
    // if (rectBottom > camTop) {
    //   console.log('this rectangle [id: ' + theRect.id + ' |name:' + theRect.name + '] is possibly on screen'
    // + '[rectbottom: ' + rectBottom + '] camTop:[' + camTop + ']');
    // } else {
    //   console.log('this rectangle is definitely not on screen');
    //   return false;
    // }
    // }
    // if (theRect.position.y )

    // }

    // if the left of the rectangle is to the left of the right of the camera

    // if the right of the rectangle is the right of the left of the camera

    // if the bottom of the rectangle is below the top of the camera
    // return true;
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
