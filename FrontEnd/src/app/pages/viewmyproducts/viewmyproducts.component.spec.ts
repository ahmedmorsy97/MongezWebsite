import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyproductsComponent } from './viewmyproducts.component';

describe('ViewmyproductsComponent', () => {
  let component: ViewmyproductsComponent;
  let fixture: ComponentFixture<ViewmyproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmyproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
