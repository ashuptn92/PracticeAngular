import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryitemlistComponent } from './bakeryitemlist.component';

describe('BakeryitemlistComponent', () => {
  let component: BakeryitemlistComponent;
  let fixture: ComponentFixture<BakeryitemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryitemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
