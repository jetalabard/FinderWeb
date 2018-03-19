import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesPolesComponent } from './activities-poles.component';

describe('ActivitiesPolesComponent', () => {
  let component: ActivitiesPolesComponent;
  let fixture: ComponentFixture<ActivitiesPolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesPolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesPolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
