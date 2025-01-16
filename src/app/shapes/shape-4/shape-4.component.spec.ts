import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape4Component } from './shape-4.component';

describe('Shape4Component', () => {
  let component: Shape4Component;
  let fixture: ComponentFixture<Shape4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
