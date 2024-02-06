import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseProgComponent } from './switch-case-prog.component';

describe('SwitchCaseProgComponent', () => {
  let component: SwitchCaseProgComponent;
  let fixture: ComponentFixture<SwitchCaseProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCaseProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCaseProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
