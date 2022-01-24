import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmywalletComponent } from './viewmywallet.component';

describe('ViewmywalletComponent', () => {
  let component: ViewmywalletComponent;
  let fixture: ComponentFixture<ViewmywalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmywalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmywalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
