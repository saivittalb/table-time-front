import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlComponent } from './navbarl.component';

describe('NavbarlComponent', () => {
  let component: NavbarlComponent;
  let fixture: ComponentFixture<NavbarlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
