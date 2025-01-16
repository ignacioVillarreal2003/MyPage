import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape10Component } from './shape-10.component';

describe('Shape10Component', () => {
  let component: Shape10Component;
  let fixture: ComponentFixture<Shape10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shape10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
