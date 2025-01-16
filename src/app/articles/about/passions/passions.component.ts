import { Component, HostListener, ElementRef } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';
import { Shape5Component } from "../../../shapes/shape-5/shape-5.component";

@Component({
  selector: 'app-passions',
  imports: [NgFor, NgStyle, Shape5Component],
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.css'],
  standalone: true
})
export class PassionsComponent {
  passions: { text: string, image: string, title: string, color: string}[] = [
    {
      text: "La música siempre ha sido una parte importante de mi vida. Tocar el piano me permite expresarme de formas únicas.",
      image: "./icons/piano.png",
      title: "Piano",
      color: "#34c7f9"
    },
    {
      text: "Viajar me permite descubrir nuevas culturas y aprender de diferentes perspectivas. Es una fuente constante de inspiración.",
      image: "./icons/travel.png",
      title: "Travel",
      color: "#fc1906"
    },
    {
      text: "Me apasiona leer sobre distopías, filosofía, ética y economía. Los libros me han permitido explorar ideas y expandir mis horizontes.",
      image: "./icons/books.png",
      title: "Books",
      color: "#9896ff"
    },
    {
      text: "Hacer ejercicio es parte de mi rutina diaria. Me ayuda a mantenerme enfocado, saludable y lleno de energía.",
      image: "./icons/gym.png",
      title: "Gym",
      color: "#00827b"
    }
  ]

  constructor(private elRef: ElementRef) { }

  @HostListener('window:scroll')
  onScroll(): void {
    const contents = this.elRef.nativeElement.querySelectorAll('.content') as NodeListOf<HTMLElement>;
    contents.forEach((content) => {
      const containerRect = content.getBoundingClientRect();
      const offsetY = containerRect.top - window.innerHeight;
      const scrollEffect = offsetY * -0.5;
      content.style.transform = `translate3d(0px, calc(${scrollEffect}px - 55%), 0px)`;
    });
  }

  ngAfterViewInit(): void {
    const sections = this.elRef.nativeElement.querySelectorAll('.passions > section') as NodeListOf<HTMLElement>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
