import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape1Component } from './shape-1.component';

describe('Shape1Component', () => {
  let component: Shape1Component;
  let fixture: ComponentFixture<Shape1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
