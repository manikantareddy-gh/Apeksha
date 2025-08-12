import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProfile } from './std-profile';

describe('StdProfile', () => {
  let component: StdProfile;
  let fixture: ComponentFixture<StdProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
