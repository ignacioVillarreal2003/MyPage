import {Component, ElementRef, HostListener, Renderer2} from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';
import {BackgroundDetectorService} from '../../services/background-detector.service';

@Component({
  selector: 'app-header',
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isNavBarActive: boolean = false;

  toggleNavBar(event: Event): void {
    const checkbox: HTMLInputElement = event.target as HTMLInputElement;
    this.isNavBarActive = checkbox.checked;
    const body: HTMLElement = document.querySelector('body') as HTMLElement;
    if (checkbox.checked) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'auto';
    }
  }

  constructor(private backgroundService: BackgroundDetectorService,
              private el: ElementRef) {}

  ngOnInit(): void {
    const linkElement: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('a span') as NodeListOf<HTMLElement>;
    const menuLines: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-hamburger .line') as NodeListOf<HTMLElement>;

    linkElement.forEach((element: HTMLElement): void => {
      this.backgroundService.activeBackgroundColor$.subscribe((color): void => {
        if (this.isColorDark(color)) {
          element.style.color = 'white';
        } else {
          element.style.color = 'black';
        }
      });
    })

    menuLines.forEach((element: HTMLElement): void => {
      this.backgroundService.activeBackgroundColor$.subscribe((color): void => {
        if (this.isWhite(color)) {
          element.style.stroke = 'black';
        } else {
          element.style.stroke = color;
        }
      });
    })
  }

  isColorDark(color: string): boolean {
    const match = color.match(/\d+/g);
    if (!match) return false;

    const [r, g, b] = match.map(Number);
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance < 128;
  }

  isWhite(color: string): boolean {
    const match = color.match(/\d+/g);
    if (!match) return false;

    const [r, g, b] = match.map(Number);
    const threshold = 240;
    return r >= threshold && g >= threshold && b >= threshold;
  }
}
