import { Component, HostListener } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-skills-showcase',
  imports: [NgForOf, NgStyle, NgIf],
  templateUrl: './skills-showcase.component.html',
  standalone: true,
  styleUrls: ['./skills-showcase.component.css']
})
export class SkillsShowcaseComponent {
  skillsList: string[] = [
    "Market Research",
    "User Experience Research",
    "Customer Research",
    "User Stories",
    "Persona Building",
    "Product Ideation",
    "-",
    "Best Practice Review",
    "Art Direction",
    "Webdesign",
    "User Interface Design",
    "User Experience Design",
    "Wireframing",
    "Prototyping",
    "User Journeys",
    "-",
    "Interaction Design",
    "Brand Identity",
    "Graphic Design",
    "Frontend Development",
    "Creative Development",
    "Full Stack Solutions",
    "E-Commerce Development",
    "CMS Integrations",
    "Wordpress, Webflow, etc."
  ];


  offsets: number[] = [];

  ngOnInit(): void {
    this.offsets = this.skillsList.map(() => 1200);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const listElements: NodeListOf<HTMLElement> = document.querySelectorAll('li');
    const windowHeight: number = window.innerHeight;

    listElements.forEach((el: HTMLElement, index: number): void => {
      const rect: DOMRect = el.getBoundingClientRect();

      const start: number = windowHeight + 300;
      const end: number = 400;

      if (rect.top <= start && rect.bottom >= end) {
        const range: number = start - end;
        const progress: number = Math.min(
          1,
          Math.max(0, (start - rect.top) / range)
        );

        this.offsets[index] = 1200 - (1200 * progress);
      }
    });
  }
}
