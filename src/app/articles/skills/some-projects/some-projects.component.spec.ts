import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeProjectsComponent } from './some-projects.component';

describe('SomeProjectsComponent', () => {
  let component: SomeProjectsComponent;
  let fixture: ComponentFixture<SomeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
