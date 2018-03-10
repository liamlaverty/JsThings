import { Component, OnInit, HostListener } from '@angular/core';
import { BrowserService } from '../browser.service';

@Component({
  selector: 'app-parent-canvas',
  templateUrl: './parent-canvas.component.html',
  styleUrls: ['./parent-canvas.component.css'],
  providers: [BrowserService]
})
export class ParentCanvasComponent implements OnInit {
  private browserHeight: number;
  private browserWidth: number;
  private viewportWidth: number;
  private viewportHeight: number;

  constructor(private browserService: BrowserService) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateBrowserSize();
  }

  ngOnInit() {
    this.updateBrowserSize();
  }

  updateBrowserSize() {
    this.SetBrowserWidth();
    this.SetBrowserHeight();
    this.UpdateCanvasSize(80, 80);
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
