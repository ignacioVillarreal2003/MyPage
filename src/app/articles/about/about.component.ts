import { Component, ElementRef } from '@angular/core';
import { AboutIntroComponent } from "./about-intro/about-intro.component";
import { AboutTraitsComponent } from "./about-traits/about-traits.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { PassionsComponent } from "./passions/passions.component";
import { FunFactComponent } from "./fun-fact/fun-fact.component";
import { AboutEngineerComponent } from './about-engineer/about-engineer.component';
import { Shape8Component } from '../../shapes/shape-8/shape-8.component';
import { Shape9Component } from "../../shapes/shape-9/shape-9.component";
import { AboutPhotoComponent } from "./about-photo/about-photo.component";
import { Shape11Component } from "../../shapes/shape-11/shape-11.component";
import { AboutFooterComponent } from "./about-footer/about-footer.component";
import { BackgroundDetectorService } from '../../services/background-detector.service';

@Component({
  selector: 'app-about',
  imports: [AboutIntroComponent, AboutTraitsComponent, TimelineComponent, PassionsComponent, FunFactComponent, AboutEngineerComponent, Shape8Component, Shape9Component, AboutPhotoComponent, AboutFooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent {

  constructor(private el: ElementRef, private backgroundService: BackgroundDetectorService) { }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => this.detectActiveBackground());
  }

  detectActiveBackground(): void {
    const backgroundElements: HTMLElement[] = Array.from(this.el.nativeElement.querySelectorAll('.bg-color')) as HTMLElement[];
    const activeElement = backgroundElements.find((element: HTMLElement) => {
      const rect: DOMRect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    if (activeElement) {
      const bgColor: string = getComputedStyle(activeElement).backgroundColor;
      this.backgroundService.setActiveBackgroundColor(bgColor);
    }
  }
}
