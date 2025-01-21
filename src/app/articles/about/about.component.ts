import { Component, ElementRef } from '@angular/core';
import { AboutIntroComponent } from "./about-intro/about-intro.component";
import { AboutTraitsComponent } from "./about-traits/about-traits.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FunFactComponent } from "./fun-fact/fun-fact.component";
import { AboutPhotoComponent } from "./about-photo/about-photo.component";
import { AboutFooterComponent } from "./about-footer/about-footer.component";
import { BackgroundDetectorService } from '../../services/background-detector.service';
import {AboutProjectsComponent} from './about-projects/about-projects.component';
import {SkillsComponent} from './skills/skills.component';

@Component({
  selector: 'app-about',
  imports: [AboutIntroComponent, AboutTraitsComponent, TimelineComponent, FunFactComponent, AboutPhotoComponent, AboutFooterComponent, AboutProjectsComponent, SkillsComponent],
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
      console.log(bgColor)
      this.backgroundService.setActiveBackgroundColor(bgColor);
    }
  }
}
