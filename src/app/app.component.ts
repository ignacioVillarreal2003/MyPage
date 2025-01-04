import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundDetectorService } from './services/background-detector.service';
import { NgIf, NgStyle } from '@angular/common';
import {AboutMeComponent} from './articles/about-me/about-me.component';
import {SkillsComponent} from './articles/about-me/skills/skills.component';
import {HeaderComponent} from './articles/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgStyle, AboutMeComponent, SkillsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {

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
