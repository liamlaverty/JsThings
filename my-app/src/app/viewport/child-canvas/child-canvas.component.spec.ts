import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCanvasComponent } from './child-canvas.component';

describe('ChildCanvasComponent', () => {
  let component: ChildCanvasComponent;
  let fixture: ComponentFixture<ChildCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
