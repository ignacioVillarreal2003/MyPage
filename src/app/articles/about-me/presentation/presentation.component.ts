import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  standalone: true,
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

  @HostListener('window:scroll')
  onScroll(): void {
    const element: HTMLElement = document.querySelector('.title') as HTMLElement;
    const scrollY: number = window.scrollY;
    const yPos: number = scrollY * 0.4;
    element.setAttribute('style', `transform: translate3d(0px, ${yPos}px, 0px)`);
  }
}
