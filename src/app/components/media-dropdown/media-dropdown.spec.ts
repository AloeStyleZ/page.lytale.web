import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDropdown } from './media-dropdown';

describe('MediaDropdown', () => {
  let component: MediaDropdown;
  let fixture: ComponentFixture<MediaDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
