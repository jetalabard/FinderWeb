import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyPlanComponent } from './agency-plan.component';

describe('AgencyPlanComponent', () => {
  let component: AgencyPlanComponent;
  let fixture: ComponentFixture<AgencyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
