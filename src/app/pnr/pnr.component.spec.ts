import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrComponent } from './pnr.component';

describe('PnrComponent', () => {
  let component: PnrComponent;
  let fixture: ComponentFixture<PnrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
