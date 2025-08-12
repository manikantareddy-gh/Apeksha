import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDashboard } from './std-dashboard';

describe('StdDashboard', () => {
  let component: StdDashboard;
  let fixture: ComponentFixture<StdDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
