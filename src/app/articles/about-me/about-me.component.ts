import {Component, ElementRef, HostListener} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {AboutSummaryComponent} from './about-summary/about-summary.component';
import {SkillsComponent} from './skills/skills.component';
import {ImagePresentationComponent} from './image-presentation/image-presentation.component';
import {PresentationComponent} from './presentation/presentation.component';
import {SomeProjectsComponent} from './some-projects/some-projects.component';
import {BackgroundDetectorService} from '../../services/background-detector.service';

@Component({
  selector: 'app-about-me',
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    AboutSummaryComponent,
    SkillsComponent,
    ImagePresentationComponent,
    PresentationComponent,
    SomeProjectsComponent
  ],
  templateUrl: './about-me.component.html',
  standalone: true,
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  constructor(private el: ElementRef,
              private backgroundService: BackgroundDetectorService) {}

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
