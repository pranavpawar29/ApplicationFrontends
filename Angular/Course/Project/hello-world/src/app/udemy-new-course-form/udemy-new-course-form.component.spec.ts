import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyNewCourseFormComponent } from './udemy-new-course-form.component';

describe('UdemyNewCourseFormComponent', () => {
  let component: UdemyNewCourseFormComponent;
  let fixture: ComponentFixture<UdemyNewCourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyNewCourseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdemyNewCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
