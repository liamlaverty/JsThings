import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CanvasAreaComponent } from './canvas-area/canvas-area.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { KeyUpComponentComponent } from './key-up-component/key-up-component.component';
import { InputModule } from './input/input.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        InputModule
      ],
      declarations: [
        AppComponent,
        CanvasAreaComponent,
        GameDetailsComponent,
        KeyUpComponentComponent,
            ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
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
