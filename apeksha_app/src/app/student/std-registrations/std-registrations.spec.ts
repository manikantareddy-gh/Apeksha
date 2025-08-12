import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdRegistrations } from './std-registrations';

describe('StdRegistrations', () => {
  let component: StdRegistrations;
  let fixture: ComponentFixture<StdRegistrations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdRegistrations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdRegistrations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
