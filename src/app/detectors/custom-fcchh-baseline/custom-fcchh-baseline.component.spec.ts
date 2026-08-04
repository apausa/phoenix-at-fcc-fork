import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFcchhBaselineComponent } from './custom-fcchh-baseline.component';

describe('CustomFcchhBaselineComponent', () => {
  let component: CustomFcchhBaselineComponent;
  let fixture: ComponentFixture<CustomFcchhBaselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFcchhBaselineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomFcchhBaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
