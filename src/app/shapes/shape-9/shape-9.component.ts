import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-shape-9',
  imports: [],
  templateUrl: './shape-9.component.html',
  styleUrls: ['./shape-9.component.css'],
  standalone: true
})
export class Shape9Component {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  shapesCount: number = 5;
  animationIndex: number = 0;

  ngOnInit(): void {
    this.generateShapes();
    setInterval(() => {
      this.generateShapes();
      this.shapesCount -= 1;
      if (this.shapesCount < 1) {
        this.changeColor();
        this.shapesCount = 5;
      }
    }, 3000);
  }

  generateShapes(): void {
    const semiCircle = this.renderer.createElement('div');
    this.renderer.addClass(semiCircle, 'semi-circle');
    this.renderer.addClass(semiCircle, `animation-${this.animationIndex}`);

    const container = this.elRef.nativeElement.querySelector('.shape-9');
    this.renderer.appendChild(container, semiCircle);

    setTimeout(() => {
      this.renderer.removeChild(container, semiCircle);
    }, 22000);
  }

  changeColor(): void {
    this.animationIndex = (this.animationIndex + 1) % 3;
  }
}
