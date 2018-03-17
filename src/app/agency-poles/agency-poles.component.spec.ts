import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyPolesComponent } from './agency-poles.component';

describe('AgencyPolesComponent', () => {
  let component: AgencyPolesComponent;
  let fixture: ComponentFixture<AgencyPolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyPolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyPolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
