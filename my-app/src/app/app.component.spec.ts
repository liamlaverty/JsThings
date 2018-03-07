import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CanvasAreaComponent } from './canvas-area/canvas-area.component';
import { GameDetailsComponent } from './game-details/game-details.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CanvasAreaComponent,
        GameDetailsComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'JS Stuff'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('JS Stuff');
  }));
  //  it('should render a canvas element', async(() => {
  //    const fixture = TestBed.createComponent(AppComponent);
  //    fixture.detectChanges();
  //    const compiled = fixture.debugElement.nativeElement;
  //    expect(compiled.querySelector('canvas').toBeTruthy());
  //  }));
});
