import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsearchComponent } from './trainsearch.component';

describe('TrainsearchComponent', () => {
  let component: TrainsearchComponent;
  let fixture: ComponentFixture<TrainsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
