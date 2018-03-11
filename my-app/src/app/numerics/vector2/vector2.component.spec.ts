import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vector2Component } from './vector2.component';

describe('Vector2Component', () => {
  let component: Vector2Component;
  let fixture: ComponentFixture<Vector2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vector2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vector2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
