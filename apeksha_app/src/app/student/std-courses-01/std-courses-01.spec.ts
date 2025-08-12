import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCourses01 } from './std-courses-01';

describe('StdCourses01', () => {
  let component: StdCourses01;
  let fixture: ComponentFixture<StdCourses01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdCourses01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCourses01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
