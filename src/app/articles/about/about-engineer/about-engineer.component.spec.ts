import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEngineerComponent } from './about-engineer.component';

describe('AboutEngineerComponent', () => {
  let component: AboutEngineerComponent;
  let fixture: ComponentFixture<AboutEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEngineerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
