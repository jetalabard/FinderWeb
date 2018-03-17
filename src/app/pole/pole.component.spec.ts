import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleComponent } from './pole.component';

describe('PoleComponent', () => {
  let component: PoleComponent;
  let fixture: ComponentFixture<PoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
