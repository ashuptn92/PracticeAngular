import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassexampleComponent } from './ngclassexample.component';

describe('NgclassexampleComponent', () => {
  let component: NgclassexampleComponent;
  let fixture: ComponentFixture<NgclassexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
