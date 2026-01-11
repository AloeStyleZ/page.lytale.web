import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncherModalComponent } from './launcher-modal';

describe('LauncherModal', () => {
  let component: LauncherModalComponent;
  let fixture: ComponentFixture<LauncherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LauncherModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LauncherModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
