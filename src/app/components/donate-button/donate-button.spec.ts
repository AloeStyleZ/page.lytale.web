import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateButton } from './donate-button';

describe('DonateButton', () => {
  let component: DonateButton;
  let fixture: ComponentFixture<DonateButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
