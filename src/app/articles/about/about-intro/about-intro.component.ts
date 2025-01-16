import { Component, ElementRef, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';
import { Shape2Component } from "../../../shapes/shape-2/shape-2.component";
import { Shape3Component } from "../../../shapes/shape-3/shape-3.component";

@Component({
  selector: 'app-about-intro',
  imports: [NgFor, Shape2Component, Shape3Component],
  templateUrl: './about-intro.component.html',
  styleUrl: './about-intro.component.css',
  standalone: true
})
export class AboutIntroComponent {
  title: string = "Hola, soy Ignacio.";
  visibleTitle: string[] = [];
  bouncingLetters: boolean[] = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {
    const letters: string[] = this.title.split('').map(letter => letter === ' ' ? '\u00A0' : letter);
    let index = 0;

    const interval = setInterval(() => {
      if (index < letters.length) {
        this.visibleTitle.push(letters[index]);
        this.bouncingLetters.push(false);
        index++;
      } else {
        clearInterval(interval);
        this.startPeriodicBounce();
      }
    }, 100);
  }

  startPeriodicBounce(): void {
    setInterval(() => {
      this.triggerBounceAnimation();
    }, 4000);
  }

  triggerBounceAnimation(): void {
    this.visibleTitle.forEach((_, index) => {
      this.bouncingLetters[index] = true;
      setTimeout(() => {
        this.bouncingLetters[index] = false;
      }, 1500);
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const section = this.elRef.nativeElement.querySelector('.background') as HTMLElement;
    const containerRect = section.getBoundingClientRect();
    const offsetY = containerRect.top - window.innerHeight;
    const scrollEffect = offsetY * -0.4
    section.style.transform = `translate3d(0px, calc(${scrollEffect}px - 40%), 0px)`;
  }
}
