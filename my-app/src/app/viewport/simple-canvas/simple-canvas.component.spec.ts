import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCanvasComponent } from './simple-canvas.component';

describe('SimpleCanvasComponent', () => {
  let component: SimpleCanvasComponent;
  let fixture: ComponentFixture<SimpleCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
