import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareeersComponent } from './careeers.component';

describe('CareeersComponent', () => {
  let component: CareeersComponent;
  let fixture: ComponentFixture<CareeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
