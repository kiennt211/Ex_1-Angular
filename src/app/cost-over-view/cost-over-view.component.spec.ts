import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostOverViewComponent } from './cost-over-view.component';

describe('CostOverViewComponent', () => {
  let component: CostOverViewComponent;
  let fixture: ComponentFixture<CostOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostOverViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
