import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetrainknowmoreComponent } from './livetrainknowmore.component';

describe('LivetrainknowmoreComponent', () => {
  let component: LivetrainknowmoreComponent;
  let fixture: ComponentFixture<LivetrainknowmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetrainknowmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetrainknowmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
