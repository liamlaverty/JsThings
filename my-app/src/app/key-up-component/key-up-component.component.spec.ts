import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpComponentComponent } from './key-up-component.component';
import { InputModule } from '../input/input.module';
import { InputHandleComponent } from '../input/input-handle/input-handle.component';

describe('KeyUpComponentComponent', () => {
  let component: KeyUpComponentComponent;
  let fixture: ComponentFixture<KeyUpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        InputModule
      ],
      declarations: [
        KeyUpComponentComponent,
        InputHandleComponent
      ]
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
