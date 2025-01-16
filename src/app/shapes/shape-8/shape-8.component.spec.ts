import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape8Component } from './shape-8.component';

describe('Shape8Component', () => {
  let component: Shape8Component;
  let fixture: ComponentFixture<Shape8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
