import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape9Component } from './shape-9.component';

describe('Shape9Component', () => {
  let component: Shape9Component;
  let fixture: ComponentFixture<Shape9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
