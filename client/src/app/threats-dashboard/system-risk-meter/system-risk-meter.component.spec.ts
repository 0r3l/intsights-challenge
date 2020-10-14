import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRiskMeterComponent } from './system-risk-meter.component';

describe('SystemRiskMeterComponent', () => {
  let component: SystemRiskMeterComponent;
  let fixture: ComponentFixture<SystemRiskMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemRiskMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRiskMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
