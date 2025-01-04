import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectView1Component } from './project-view-1.component';

describe('ProjectView1Component', () => {
  let component: ProjectView1Component;
  let fixture: ComponentFixture<ProjectView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectView1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
