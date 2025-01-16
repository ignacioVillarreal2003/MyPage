import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsIntroComponent } from './skills-intro.component';

describe('SkillsIntroComponent', () => {
  let component: SkillsIntroComponent;
  let fixture: ComponentFixture<SkillsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
