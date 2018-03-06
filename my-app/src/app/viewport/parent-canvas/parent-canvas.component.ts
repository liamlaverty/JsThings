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
  }


  private SetBrowserHeight(): void {
    this.browserService.getBrowserHeight();
  }
  private SetBrowserWidth(): void {
    this.browserService.getBrowserWidth();
  }

}
