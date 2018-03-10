import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BrowserService } from '../browser.service';
import { ChildCanvasComponent } from '../child-canvas/child-canvas.component';
import { SimpleCanvasComponent } from '../simple-canvas/simple-canvas.component';

@Component({
  selector: 'app-parent-canvas',
  templateUrl: './parent-canvas.component.html',
  styleUrls: ['./parent-canvas.component.css'],
  providers: [BrowserService]
})
export class ParentCanvasComponent extends SimpleCanvasComponent implements OnInit, AfterViewInit  {
  private browserHeight: number;
  private browserWidth: number;
  private viewportWidth: number;
  private viewportHeight: number;
  private context: CanvasRenderingContext2D;
  private childCanvasArray: Array<ChildCanvasComponent>;

  constructor(private browserService: BrowserService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
      super();
      this.childCanvasArray = new Array<ChildCanvasComponent>();

     }

  @ViewChild('mySimpleCanvas') myCanvas;
  @ViewChild('mySimpleCanvas', { read: ViewContainerRef }) myParentCanvas;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateBrowserSize();
  }

  ngOnInit() {
    this.updateBrowserSize();
  }

  ngAfterViewInit() {
    this.abstAfterViewInit();
    const canvas = this.myCanvas.nativeElement;
    console.log('parent class ngAfterViewInit');
    this.context = canvas.getContext('2d');
  }

  updateBrowserSize() {
    this.SetBrowserWidth();
    this.SetBrowserHeight();
    this.UpdateCanvasSize(80, 80); // 80% of window size
  }

  GreedyClearScreen(): void {
    this.greedyClearCanvas();
  }


  private addLayer() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChildCanvasComponent);
    const ref = this.myParentCanvas.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    this.childCanvasArray.push(ref);
  }

  private SetBrowserHeight(): void {
    this.browserHeight = this.browserService.getBrowserHeight();

  }
  private SetBrowserWidth(): void {
    this.browserWidth = this.browserService.getBrowserWidth();
  }

  private UpdateCanvasSize(heightPercent: number, widthPercent: number) {
    this.viewportHeight = ((this.browserHeight / 100) * heightPercent);
    this.viewportWidth = ((this.browserWidth / 100) * widthPercent);

  }

}
