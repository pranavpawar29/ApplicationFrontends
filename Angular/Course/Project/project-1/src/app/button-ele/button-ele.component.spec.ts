import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEleComponent } from './button-ele.component';

describe('ButtonEleComponent', () => {
  let component: ButtonEleComponent;
  let fixture: ComponentFixture<ButtonEleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
