import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StncodeComponent } from './stncode.component';

describe('StncodeComponent', () => {
  let component: StncodeComponent;
  let fixture: ComponentFixture<StncodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StncodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
