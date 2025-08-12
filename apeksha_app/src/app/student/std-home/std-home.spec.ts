import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHome } from './std-home';

describe('StdHome', () => {
  let component: StdHome;
  let fixture: ComponentFixture<StdHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
