import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhotoComponent } from './about-photo.component';

describe('AboutPhotoComponent', () => {
  let component: AboutPhotoComponent;
  let fixture: ComponentFixture<AboutPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
