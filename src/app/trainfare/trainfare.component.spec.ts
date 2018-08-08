import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainfareComponent } from './trainfare.component';

describe('TrainfareComponent', () => {
  let component: TrainfareComponent;
  let fixture: ComponentFixture<TrainfareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainfareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
