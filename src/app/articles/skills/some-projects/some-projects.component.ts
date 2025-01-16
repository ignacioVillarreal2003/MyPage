import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-some-projects',
  imports: [],
  templateUrl: './some-projects.component.html',
  standalone: true,
  styleUrl: './some-projects.component.css'
})
export class SomeProjectsComponent {

  constructor(private elRef: ElementRef) {}

  @HostListener('window:scroll')
  onScroll(): void {
    const container = this.elRef.nativeElement.querySelector('.some-projects') as HTMLElement;
    const content = container.querySelector('.content') as HTMLElement;
    const containerRect = container.getBoundingClientRect();

    const offsetY = containerRect.top - window.innerHeight;
    const scrollEffect = offsetY * -0.4 - 400;

    content.style.transform = `translate3d(0px, ${scrollEffect}px, 0px)`;
  }
}
