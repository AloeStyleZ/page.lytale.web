import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncherModal } from './launcher-modal';

describe('LauncherModal', () => {
  let component: LauncherModal;
  let fixture: ComponentFixture<LauncherModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LauncherModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LauncherModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
