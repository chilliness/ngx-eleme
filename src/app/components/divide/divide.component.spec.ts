import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideComponent } from './divide.component';

describe('DivideComponent', () => {
  let component: DivideComponent;
  let fixture: ComponentFixture<DivideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
