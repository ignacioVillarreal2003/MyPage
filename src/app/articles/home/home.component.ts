import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {SkillsShowcaseComponent} from '../skills-showcase/skills-showcase.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    SkillsShowcaseComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  /*ngOnInit() {
    this.initParallax();
  }

  initParallax(): void {
    const layers: NodeListOf<HTMLElement> = document.querySelectorAll('.introduction-content') as NodeListOf<HTMLElement>;
    window.addEventListener('scroll', (): void => {
      const scrollY: number = window.scrollY;
      layers.forEach((layer: HTMLElement): void => {
        const yPos: number = scrollY * 0.5;
        layer.setAttribute('style', `transform: translate3d(0px, ${yPos}px, 0px)`);
      });
    });
  }*/


}
