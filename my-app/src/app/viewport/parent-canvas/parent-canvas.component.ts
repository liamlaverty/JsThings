import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BrowserService } from '../browser.service';
import { ChildCanvasComponent } from '../child-canvas/child-canvas.component';
import { SimpleCanvasComponent } from '../simple-canvas/simple-canvas.component';
import { Layer } from '../../models/layer.model';
import { CameraService } from '../../camera/camera.service';
import { Matrix } from '../../numerics/matrix/matrix.model';
import { Vector2 } from '../../numerics/vector2/vector2.model';

@Component({
  selector: 'app-parent-canvas',
  templateUrl: './parent-canvas.component.html',
  styleUrls: ['./parent-canvas.component.css'],
  providers: [BrowserService]
})
export class ParentCanvasComponent extends SimpleCanvasComponent implements OnInit, AfterViewInit  {
  private childCanvasArray: Array<ChildCanvasComponent>;
  private ctxArr: Array<CanvasRenderingContext2D>;


  /* canvas sizing */
  private AspectRatio = 1.77; // 16:9
  private TARGET_WIDTH = 1920;
  private TARGET_HEIGHT = 1080;
  private browserHeight: number;
  private browserWidth: number;


  constructor(protected browserService: BrowserService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
    super(browserService);
      this.childCanvasArray = new Array<ChildCanvasComponent>();

     }

    @ViewChild('mySimpleCanvas', { read: ViewContainerRef }) myParentCanvas;

  ngOnInit() {
    this.absOnInit();
    this.updateBrowserSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(evt) {
    this.updateBrowserSize(evt);
     console.log('updated browser size');
  }


  ngAfterViewInit() {
    this.abstAfterViewInit();
    // const canvas = this.myCanvas.nativeElement;
    console.log('parent class ngAfterViewInit');
  }

  GreedyClearScreen(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    // this.greedyClearCanvas();
  }











  Draw(cameraPosition: Vector2, cameraFocalPoint: Vector2, transformMatrix?: Matrix): CanvasRenderingContext2D {
    // console.log('drawing main game component');
    this.GreedyClearScreen();
    const scaleFill = Math.max(this.viewportWidth / this.TARGET_WIDTH,
      this.viewportHeight / this.TARGET_HEIGHT);

    const scaleFit = Math.min(this.viewportWidth / this.TARGET_WIDTH,
      this.viewportHeight / this.TARGET_HEIGHT);

    this.ctx.fillStyle = '#000';

    for (const childCanvas of this.childCanvasArray) {
      const drawnCanvasLayer = childCanvas.Draw(cameraPosition, cameraFocalPoint, transformMatrix);

      // drawnCanvasLayer.setTransform(
      //   scaleFit, 0, 0,
      //   scaleFit, Math.floor(this.viewportWidth / 10), Math.floor(this.viewportHeight / 10)
      // );


      // drawnCanvasLayer.setTransform(
      //   1, 1, 0,
      //   1, 0, 0
      // );



      // drawnCanvasLayer.canvas.style.height = this.viewportHeight + 'px';
      // drawnCanvasLayer.canvas.style.width = this.viewportWidth + 'px';
      // console.log('drawing with W:[' + this.viewportWidth + '] H:[' + this.viewportHeight + ']');

      // this.ctx.fillRect(0, 0, this.viewportWidth, this.viewportHeight);
      // const frameAsImg = new Image(this.viewportHeight, this.viewportWidth);
      this.ctx.drawImage(drawnCanvasLayer.canvas, 0, 0); // , this.viewportWidth, this.viewportHeight);
      // drawnCanvasLayer.canvas.style.height = this.TARGET_HEIGHT + 'px';
      // drawnCanvasLayer.canvas.style.width = this.TARGET_WIDTH + 'px';
    }

     this.ctx.setTransform(
       scaleFill, 0, 0,
       scaleFill, Math.floor(this.viewportWidth / 5), Math.floor(this.viewportHeight / 5)
     );
    return null;
  }
















  addLayer(layer: Layer) {
    console.log('adding new layer');
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChildCanvasComponent);
    const ref = this.myParentCanvas.createComponent(factory);
    const canvas = (<ChildCanvasComponent>ref.instance);
    canvas.viewportHeight = this.TARGET_HEIGHT;
    canvas.viewportWidth = this.TARGET_WIDTH;
    canvas.layer = layer;
    console.log('layer contains [' + canvas.layer.Rectangles.length + '] items');
    ref.changeDetectorRef.detectChanges();
    this.childCanvasArray.push(canvas);
  }


  /* canvas sizing */
  private UpdateCanvasSize(heightPercent: number, widthPercent: number) {

    const widthToUse = Math.min(this.browserWidth, (this.browserHeight * this.AspectRatio));
    const heightToUse = Math.min(this.browserHeight, (this.browserWidth / this.AspectRatio));

    console.log('wToUse:[' + widthToUse + '] hToUse:[' + heightToUse + ']');


    if (heightToUse < widthToUse) {
      console.log('using height to use');
      this.viewportHeight = Math.floor(heightToUse);
      this.viewportWidth = Math.floor(this.viewportHeight * this.AspectRatio);
    } else {
      console.error('using width to use. This is not implemented');
      // let targetViewportHeight = ((this.browserHeight / 100) * heightPercent);
      // let targetViewportWidth = (targetViewportHeight * (this.AspectRatio));

      // targetViewportWidth = ((this.browserWidth / 100 ) * widthPercent);
      // targetViewportHeight = (targetViewportWidth * this.AspectRatio);


      // this.viewportHeight = targetViewportHeight;
      // this.viewportWidth = targetViewportWidth;
    }
    console.log('target height is ' + this.viewportHeight);
    console.log('target width is ' + this.viewportWidth);
  }

  updateBrowserSize(evt?) {
    this.SetBrowserWidth(evt);
    this.SetBrowserHeight(evt);
    console.info(`browser: h:[${this.browserHeight}] w:[${this.browserWidth}]`);
    this.UpdateCanvasSize(100, 100); // 100% of window size
  }


  private SetBrowserHeight(evt?): void {
    this.browserHeight = this.browserService.getBrowserHeight(evt);

  }
  private SetBrowserWidth(evt?): void {
    this.browserWidth = this.browserService.getBrowserWidth(evt);
  }
}
