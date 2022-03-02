import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusermoneyComponent } from './editusermoney.component';

describe('EditusermoneyComponent', () => {
  let component: EditusermoneyComponent;
  let fixture: ComponentFixture<EditusermoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusermoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusermoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
