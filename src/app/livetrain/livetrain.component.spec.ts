import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetrainComponent } from './livetrain.component';

describe('LivetrainComponent', () => {
  let component: LivetrainComponent;
  let fixture: ComponentFixture<LivetrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
