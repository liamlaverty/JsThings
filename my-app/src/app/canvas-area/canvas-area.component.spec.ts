import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CanvasAreaComponent } from './canvas-area.component';
import { KeyUpComponentComponent } from '../key-up-component/key-up-component.component';
import { InputHandleComponent } from '../input/input-handle/input-handle.component';

describe('CanvasAreaComponent', () => {
  let component: CanvasAreaComponent;
  let fixture: ComponentFixture<CanvasAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CanvasAreaComponent,
        KeyUpComponentComponent,
        InputHandleComponent
      ],
      schemas: [
        // CUSTOM_ELEMENTS_SCHEMA
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
