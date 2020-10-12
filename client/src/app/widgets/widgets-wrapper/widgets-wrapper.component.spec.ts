import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsWrapperComponent } from './widgets-wrapper.component';

describe('WidgetWrapperComponent', () => {
  let component: WidgetsWrapperComponent;
  let fixture: ComponentFixture<WidgetsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
