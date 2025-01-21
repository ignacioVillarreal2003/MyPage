import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape3Component } from './shape-3.component';

describe('Shape3Component', () => {
  let component: Shape3Component;
  let fixture: ComponentFixture<Shape3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
