import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BrowserService } from '../browser.service';
import { ChildCanvasComponent } from '../child-canvas/child-canvas.component';
import { SimpleCanvasComponent } from '../simple-canvas/simple-canvas.component';
import { Layer } from '../../models/layer.model';

@Component({
  selector: 'app-parent-canvas',
  templateUrl: './parent-canvas.component.html',
  styleUrls: ['./parent-canvas.component.css'],
  providers: [BrowserService]
})
export class ParentCanvasComponent extends SimpleCanvasComponent implements OnInit, AfterViewInit  {
  private childCanvasArray: Array<ChildCanvasComponent>;

  constructor(protected browserService: BrowserService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
    super(browserService);
      this.childCanvasArray = new Array<ChildCanvasComponent>();

     }

    @ViewChild('mySimpleCanvas', { read: ViewContainerRef }) myParentCanvas;

  ngOnInit() {
    this.absOnInit();
  }

  ngAfterViewInit() {
    this.abstAfterViewInit();
    // const canvas = this.myCanvas.nativeElement;
    console.log('parent class ngAfterViewInit');
  }

  GreedyClearScreen(): void {
    this.greedyClearCanvas();
  }

  Draw() {
    // console.log('drawing main game component');

    for (const childCanvas of this.childCanvasArray) {
       childCanvas.Draw();
    }
  }

  addLayer(layer: Layer) {
    console.log('adding new layer');
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChildCanvasComponent);
    const ref = this.myParentCanvas.createComponent(factory);
    const canvas = (<ChildCanvasComponent>ref.instance);
    canvas.layer = layer;
    console.log('layer contains [' + canvas.layer.Rectangles.length + '] items');
    ref.changeDetectorRef.detectChanges();
    this.childCanvasArray.push(canvas);
  }
}
