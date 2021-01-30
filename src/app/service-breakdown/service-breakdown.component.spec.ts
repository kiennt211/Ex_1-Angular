import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBreakdownComponent } from './service-breakdown.component';

describe('ServiceBreakdownComponent', () => {
  let component: ServiceBreakdownComponent;
  let fixture: ComponentFixture<ServiceBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBreakdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
