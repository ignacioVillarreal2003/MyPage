import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape7Component } from './shape-7.component';

describe('Shape7Component', () => {
  let component: Shape7Component;
  let fixture: ComponentFixture<Shape7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
