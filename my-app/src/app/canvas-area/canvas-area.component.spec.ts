import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasAreaComponent } from './canvas-area.component';
import { KeyUpComponentComponent } from '../key-up-component/key-up-component.component';

describe('CanvasAreaComponent', () => {
  let component: CanvasAreaComponent;
  let fixture: ComponentFixture<CanvasAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CanvasAreaComponent,
        KeyUpComponentComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
