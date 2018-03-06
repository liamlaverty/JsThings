import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCanvasComponent } from './parent-canvas.component';

describe('ParentCanvasComponent', () => {
  let component: ParentCanvasComponent;
  let fixture: ComponentFixture<ParentCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
