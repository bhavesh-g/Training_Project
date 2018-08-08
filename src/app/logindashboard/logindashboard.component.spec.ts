import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindashboardComponent } from './logindashboard.component';

describe('LogindashboardComponent', () => {
  let component: LogindashboardComponent;
  let fixture: ComponentFixture<LogindashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
