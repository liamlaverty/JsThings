import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ParentCanvasComponent } from '../viewport/parent-canvas/parent-canvas.component';
import { ViewportModule } from '../viewport/viewport.module';
import { Layer } from '../models/layer.model';
import { Rectangle } from '../models/rectangle';
import { RECTANGLES, CLOUDS, PLAYER, GROUND, SKY } from '../mock-rectangles';
import { KeyUpComponentComponent } from '../key-up-component/key-up-component.component';

// import { ParentCanvasComponent } from '../viewport/parent-canvas/parent-canvas.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  @ViewChild(KeyUpComponentComponent)
  private keyUpComponentComponent: KeyUpComponentComponent;
  @ViewChild('game', { read: ViewContainerRef }) theGameRegion;
  theGame: ParentCanvasComponent;
  theGameRef;
  ticks = 0;
  startTime: number;
  currentTime: number;
  timeDiff: number;
  frameBuffer: number[];
  fps = 0;

  ngOnInit() {
    const initTime = new Date();
    this.startTime = initTime.valueOf();
    this.frameBuffer = new Array<number>();



    // this.startTime = new Date();
    console.log('game main init');

    const layers = this.GetLayerSettings();

    const factory = this.componentFactoryResolver.resolveComponentFactory(ParentCanvasComponent);
    this.theGameRef = this.theGameRegion.createComponent(factory);
    this.theGame = (<ParentCanvasComponent>this.theGameRef.instance);

    for (const layer of layers) {
      this.theGame.addLayer(layer);
    }
    this.theGameRef.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
    console.log('game main ngAfterViewInit');

    this.ticks = 0;
    this.tick();
  }


  initCanvasRegion() {
    // console.log('game main init canvas');
  }

  tick(): void {
    setTimeout(() => {
      this.ticks++;
      this.updateTimer();
    });
    requestAnimationFrame(() => {
      this.tick();
      this.keyUpComponentComponent.inputTick();
    });

    const myTime: Date = new Date();
    this.theGame.Draw();
    const myCompletedTime: Date = new Date();
    const myDiff: number = (myCompletedTime.getTime() - myTime.getTime());
    this.frameBuffer.push(myDiff);

    if (this.frameBuffer.length >= 30) {
      this.calculateFps();
    }
  }

  calculateFps() {

     const bufferlength = this.frameBuffer.length;
     const bufferTotalTime = this.frameBuffer.reduce((a, b) => a + b, 0);
     this.fps = bufferlength / bufferTotalTime;

    while (this.frameBuffer.length) {
      this.frameBuffer.pop();
    }
  }
  updateTimer() {
    const myInitTime = new Date();
    this.currentTime = myInitTime.valueOf();
    this.timeDiff = this.currentTime - this.startTime;
  }




  GetLayerSettings(): Array<Layer> {

    const allRects = RECTANGLES;

    const Layers: Array<Layer> = new Array<Layer>();
    const skyLayer: Layer = new Layer;
    skyLayer.Rectangles = RECTANGLES;

    Layers.push(skyLayer);


    // this.SetupSkyLayer(Layers);
    this.SetupCloudLayer(Layers);
    this.SetupGroundLayer(Layers);
    this.SetupPlayerLayer(Layers);

    return Layers;
  }

  SetupCloudLayer(layerCollection: Array<Layer>): void {
    const thisLayer: Layer = new Layer;
    thisLayer.Rectangles = CLOUDS;

    layerCollection.push(thisLayer);
  }

  SetupPlayerLayer(layerCollection: Array<Layer>): void {
    const thisLayer: Layer = new Layer;
    thisLayer.Rectangles = PLAYER;

    layerCollection.push(thisLayer);
  }

  SetupGroundLayer(layerCollection: Array<Layer>): void {
    const thisLayer: Layer = new Layer;
    thisLayer.Rectangles = GROUND;

    layerCollection.push(thisLayer);
  }

  SetupSkyLayer(layerCollection: Array<Layer>): void {
    const thisLayer: Layer = new Layer;
    thisLayer.Rectangles = SKY;

    layerCollection.push(thisLayer);
  }
}
