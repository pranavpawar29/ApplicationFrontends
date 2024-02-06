import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveOneComponent } from './archive-one.component';

describe('ArchiveOneComponent', () => {
  let component: ArchiveOneComponent;
  let fixture: ComponentFixture<ArchiveOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
