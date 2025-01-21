import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape13Component } from './shape-13.component';

describe('Shape13Component', () => {
  let component: Shape13Component;
  let fixture: ComponentFixture<Shape13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
