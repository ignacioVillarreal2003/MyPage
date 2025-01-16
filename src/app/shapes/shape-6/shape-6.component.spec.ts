import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape6Component } from './shape-6.component';

describe('Shape6Component', () => {
  let component: Shape6Component;
  let fixture: ComponentFixture<Shape6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
