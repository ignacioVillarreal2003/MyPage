import { Component, ElementRef, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shape-6',
  imports: [NgFor],
  templateUrl: './shape-6.component.html',
  styleUrl: './shape-6.component.css',
  standalone: true
})
export class Shape6Component {
  circles: number[] = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    const totalCircles = 12;
    this.circles = Array(totalCircles).fill(0);
  }

  ngAfterViewInit(): void {
    this.animation();
  }

  animation(): void {
    const elements: NodeListOf<HTMLElement> = this.elRef.nativeElement.querySelectorAll('.circle') as NodeListOf<HTMLElement>;
    elements.forEach((element, index) => {
      const randomDelay = Math.random() * 4 - 2;
      const randomRotation = Math.random() * 90;
      const randomDuration = Math.random() * 5 + 3;
      element.style.animationDelay = `${randomDelay}s`;
      element.style.rotate = `${randomRotation}s`;
      element.style.animationDuration = `${randomDuration}s`;
    });
  }

  hoverOn(): void {
    const shape: HTMLElement = this.elRef.nativeElement.querySelector('.shape-6');
    shape.style.width = '900px';
    shape.style.height = '675px';
  }
  
  hoverOff(): void {
    const shape: HTMLElement = this.elRef.nativeElement.querySelector('.shape-6');
    shape.style.width = '800px';
    shape.style.height = '600px';
  }
  
}
