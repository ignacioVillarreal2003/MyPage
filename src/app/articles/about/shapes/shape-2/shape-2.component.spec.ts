import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape2Component } from './shape-2.component';

describe('Shape2Component', () => {
  let component: Shape2Component;
  let fixture: ComponentFixture<Shape2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
