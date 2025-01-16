import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTraitsComponent } from './about-traits.component';

describe('AboutTraitsComponent', () => {
  let component: AboutTraitsComponent;
  let fixture: ComponentFixture<AboutTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTraitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
