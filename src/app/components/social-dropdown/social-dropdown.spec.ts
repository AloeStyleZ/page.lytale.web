import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDropdownComponent } from './social-dropdown';

describe('SocialDropdown', () => {
  let component: SocialDropdownComponent;
  let fixture: ComponentFixture<SocialDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialDropdownComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
