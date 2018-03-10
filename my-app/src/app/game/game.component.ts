import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ParentCanvasComponent } from '../viewport/parent-canvas/parent-canvas.component';
import { ViewportModule } from '../viewport/viewport.module';
import { Layer } from '../models/layer.model';
import { Rectangle } from '../models/rectangle';
import { RECTANGLES } from '../mock-rectangles';
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
  @ViewChild('game', {read: ViewContainerRef}) theGameRegion;
  theGame: ParentCanvasComponent;
  theGameRef;
  ticks = 0;

  ngOnInit() {
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
    });
    requestAnimationFrame(() => {
      this.tick();
      this.keyUpComponentComponent.inputTick();
    });

     this.theGame.Draw();
  }




  GetLayerSettings(): Array<Layer> {

    const allRects = RECTANGLES;

    const Layers: Array<Layer> = new Array<Layer>();
    const cloudLayer: Layer = new Layer;
    cloudLayer.Rectangles = RECTANGLES;

    Layers.push(cloudLayer);

    return Layers;
  }
}
