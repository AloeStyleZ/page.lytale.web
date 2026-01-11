import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDropdown } from './social-dropdown';

describe('SocialDropdown', () => {
  let component: SocialDropdown;
  let fixture: ComponentFixture<SocialDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
