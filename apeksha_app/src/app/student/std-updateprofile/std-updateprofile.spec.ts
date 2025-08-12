import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdUpdateprofile } from './std-updateprofile';

describe('StdUpdateprofile', () => {
  let component: StdUpdateprofile;
  let fixture: ComponentFixture<StdUpdateprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdUpdateprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdUpdateprofile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
