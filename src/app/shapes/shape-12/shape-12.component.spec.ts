import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape12Component } from './shape-12.component';

describe('Shape12Component', () => {
  let component: Shape12Component;
  let fixture: ComponentFixture<Shape12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
