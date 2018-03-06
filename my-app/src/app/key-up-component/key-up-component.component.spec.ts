import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpComponentComponent } from './key-up-component.component';

describe('KeyUpComponentComponent', () => {
  let component: KeyUpComponentComponent;
  let fixture: ComponentFixture<KeyUpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
