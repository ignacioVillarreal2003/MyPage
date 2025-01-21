import { Component, ElementRef, HostListener } from '@angular/core';
import { Shape1Component} from '../shapes/shape-1/shape-1.component';
import { Shape2Component } from '../shapes/shape-2/shape-2.component';

@Component({
  selector: 'app-about-intro',
  imports: [Shape1Component, Shape2Component],
  templateUrl: './about-intro.component.html',
  styleUrl: './about-intro.component.css',
  standalone: true
})
export class AboutIntroComponent {

  constructor(private elRef: ElementRef) { }

  @HostListener('window:scroll')
  onScroll(): void {
    const section: HTMLElement = this.elRef.nativeElement.querySelector('.content-wrapper') as HTMLElement;
    const containerRect: DOMRect = section.getBoundingClientRect();
    const offsetY: number = containerRect.top - window.innerHeight;
    const scrollEffect: number = offsetY * -0.4
    section.style.transform = `translate3d(0px, calc(${scrollEffect}px - 40%), 0px)`;
  }
}
