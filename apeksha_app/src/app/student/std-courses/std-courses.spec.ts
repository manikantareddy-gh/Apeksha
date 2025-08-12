import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCourses } from './std-courses';

describe('StdCourses', () => {
  let component: StdCourses;
  let fixture: ComponentFixture<StdCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
