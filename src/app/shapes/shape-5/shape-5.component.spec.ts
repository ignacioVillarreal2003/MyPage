import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape5Component } from './shape-5.component';

describe('Shape5Component', () => {
  let component: Shape5Component;
  let fixture: ComponentFixture<Shape5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
