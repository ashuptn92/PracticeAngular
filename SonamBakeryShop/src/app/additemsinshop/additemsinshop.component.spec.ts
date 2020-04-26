import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemsinshopComponent } from './additemsinshop.component';

describe('AdditemsinshopComponent', () => {
  let component: AdditemsinshopComponent;
  let fixture: ComponentFixture<AdditemsinshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemsinshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemsinshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
