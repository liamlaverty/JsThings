import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ParentCanvasComponent } from '../viewport/parent-canvas/parent-canvas.component';
import { ViewportModule } from '../viewport/viewport.module';

// import { ParentCanvasComponent } from '../viewport/parent-canvas/parent-canvas.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild('game', {read: ViewContainerRef}) theGameRegion;
  theGame: ParentCanvasComponent;
  theGameRef;
  ticks = 0;

  ngOnInit() {
    console.log('game main init');
    const factory = this.componentFactoryResolver.resolveComponentFactory(ParentCanvasComponent);
    this.theGameRef = this.theGameRegion.createComponent(factory);
    this.theGame = (<ParentCanvasComponent>this.theGameRef.instance);
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
    });

     this.theGame.Draw();
  }

}
