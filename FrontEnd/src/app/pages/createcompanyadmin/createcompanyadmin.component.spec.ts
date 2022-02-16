import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompanyadminComponent } from './createcompanyadmin.component';

describe('CreatecompanyadminComponent', () => {
  let component: CreatecompanyadminComponent;
  let fixture: ComponentFixture<CreatecompanyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecompanyadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecompanyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
