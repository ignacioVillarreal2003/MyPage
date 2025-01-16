import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape11Component } from './shape-11.component';

describe('Shape11Component', () => {
  let component: Shape11Component;
  let fixture: ComponentFixture<Shape11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
