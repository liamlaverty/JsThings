import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ParentCanvasComponent } from '../viewport/parent-canvas/parent-canvas.component';
import { ViewportModule } from '../viewport/viewport.module';
import { Layer } from '../models/layer.model';
import { Rectangle } from '../models/rectangle';
import { RECTANGLES, CLOUDS, PLAYER, GROUND, PHYSICAL_OBJECTS } from '../mock-rectangles';
import { KeyUpComponentComponent } from '../key-up-component/key-up-component.component';
import { Camera } from '../camera/camera.model';
import { MainCharacter } from './MainCharacter/main-character.model';
import { GameRectangle } from '../models/game-rectangle';
import { MainCharacterService } from './MainCharacter/main-character.service';
import { Vector2 } from '../numerics/vector2/vector2.model';
import { Vector2Service } from '../numerics/vector2/vector2.service';
import { CameraService } from '../camera/camera.service';
import { PhysicalEntityService } from '../physics/physical-entity.service';

// import { ParentCanvasComponent } from '../viewport/parent-canvas/parent-canvas.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [MainCharacterService]
})
export class GameComponent implements OnInit, AfterViewInit {

  cameraService: CameraService;
  physicalEntityService: PhysicalEntityService;
  theGame: ParentCanvasComponent;
  theGameRef;
  ticks = 0;
  startTime: number;
  currentTime: number;
  timeDiff: number;
  frameBuffer: number[];
  fps = 0;
  theCamera: Camera;
  mainCharacter: MainCharacter;


  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    public mainCharacterService: MainCharacterService) {

    this.mainCharacter = mainCharacterService.GetMainCharacter();
    this.mainCharacter = this.mainCharacterService.GetMainCharacter();
    this.cameraService = new CameraService();
    this.physicalEntityService = new PhysicalEntityService();
    this.cameraService.CreateCamera(new Vector2(720, 720), this.mainCharacter.rectangleDetails.position);
    this.theCamera = this.cameraService.GetCamera();
    // this.theCamera = new Camera(
    //   new Vector2(720, 720), // 720px x 720px
    //   this.mainCharacter.rectangleDetails.position,
    // );
  }


  @ViewChild(KeyUpComponentComponent)
  private keyUpComponentComponent: KeyUpComponentComponent;
  @ViewChild('game', { read: ViewContainerRef }) theGameRegion;
  // copyOfPlayerRect: GameRectangle[];
  // mainCharacterService: MainCharacterService;

  ngOnInit() {

    // this.copyOfPlayerRect = <GameRectangle[]> JSON.parse(JSON.stringify(PLAYER));

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
      // this.RegisterPhysicals(layer.Rectangles);
    }
    this.theGameRef.changeDetectorRef.detectChanges();
  }

  RegisterPhysicals(rects: Array<GameRectangle>) {
    this.physicalEntityService.RegisterPhysicalEntityCollection(rects);
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



    const parallax = new Vector2(0, 0);

    this.physicalEntityService.TickOnPhysicalEntities();
    // this.theCamera.GetViewMatrix(parallax);
    this.theGame.Draw(this.theCamera.Position, this.theCamera.Viewport, this.theCamera.GetViewMatrix(parallax));
    const myCompletedTime: Date = new Date();
    const myDiff: number = (myCompletedTime.getTime() - myTime.getTime());
    this.frameBuffer.push(myDiff);
    this.mainCharacter.Update(myTime.valueOf());

    if (this.frameBuffer.length >= 30) {
      this.calculateFps();
    }
  }


  calculateFps() {
    this.fps = Math.floor((this.ticks / this.timeDiff) * 1000);

  }

  // calculateFpsOld() {

  //   const bufferlength = this.frameBuffer.length;
  //   const bufferTotalTime = this.frameBuffer.reduce((a, b) => a + b, 0);
  //   this.fps = (bufferlength / bufferTotalTime );

  //   while (this.frameBuffer.length) {
  //     this.frameBuffer.pop();
  //   }
  // }
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
    this.SetupPhysicalObjectsDrawingLayer(Layers);
    this.SetupPlayerLayer(Layers);

    return Layers;
  }

  SetupCloudLayer(layerCollection: Array<Layer>): void {
    const thisLayer: Layer = new Layer;
    thisLayer.Rectangles = CLOUDS;

    layerCollection.push(thisLayer);
  }

  SetupPhysicalObjectsDrawingLayer(layerCollection: Array<Layer>): void {
    const thisLayer: Layer = new Layer;

    thisLayer.Rectangles = PHYSICAL_OBJECTS;
    this.RegisterPhysicals(thisLayer.Rectangles);
    layerCollection.push(thisLayer);
  }

  SetupPlayerLayer(layerCollection: Array<Layer>): void {
    const thisLayer: Layer = new Layer;

    const thisRectangleSet = new Array<GameRectangle>();
    thisRectangleSet.push(this.mainCharacter.rectangleDetails);

    thisLayer.Rectangles = thisRectangleSet; //  PLAYER; // this.copyOfPlayerRect;
    this.RegisterPhysicals(thisLayer.Rectangles);
    layerCollection.push(thisLayer);
  }

  SetupGroundLayer(layerCollection: Array<Layer>): void {
    const thisLayer: Layer = new Layer;
    thisLayer.Rectangles = GROUND;

    layerCollection.push(thisLayer);
  }

  // SetupSkyLayer(layerCollection: Array<Layer>): void {

  //   const thisLayer: Layer = new Layer;
  //   thisLayer.Rectangles = SKY;

  //   layerCollection.push(thisLayer);
  // }
}
