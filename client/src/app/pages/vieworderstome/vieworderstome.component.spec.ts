import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderstomeComponent } from './vieworderstome.component';

describe('VieworderstomeComponent', () => {
  let component: VieworderstomeComponent;
  let fixture: ComponentFixture<VieworderstomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderstomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderstomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
