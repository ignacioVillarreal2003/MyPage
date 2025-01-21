import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-shape-9',
  templateUrl: './shape-9.component.html',
  styleUrls: ['./shape-9.component.css'],
  standalone: true
})
export class Shape9Component {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createSemiCircle();
    setInterval(() => {
      this.createSemiCircle();
    }, 20000);
  }

  createSemiCircle() {
    const svgContainer: HTMLElement = this.elRef.nativeElement.querySelector('.shape-9') as HTMLElement;

    const semiCircle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    semiCircle.setAttribute('d', 'M 50 40 A 10 10 0 0 1 50 60');
    semiCircle.setAttribute('fill', '#ffde36');

    const motionAnimation = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
    motionAnimation.setAttribute('dur', '40s');
    motionAnimation.setAttribute('repeatCount', 'indefinite');
    motionAnimation.setAttribute('path', 'M -55 0 L 55 00');

    const colorAnimation = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    colorAnimation.setAttribute('attributeName', 'fill');
    colorAnimation.setAttribute('values', '#ffde36;#ffb400;#ffde36');
    colorAnimation.setAttribute('dur', '40s');
    colorAnimation.setAttribute('repeatCount', 'indefinite');

    const scaleAnimation = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
    scaleAnimation.setAttribute('attributeName', 'transform');
    scaleAnimation.setAttribute('type', 'scale');
    scaleAnimation.setAttribute('values', '0.8;1');
    scaleAnimation.setAttribute('dur', '40s');
    scaleAnimation.setAttribute('repeatCount', 'indefinite');

    const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    newSvg.setAttribute('width', '100%');
    newSvg.setAttribute('viewBox', '0 0 100 100');
    newSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    newSvg.setAttribute('style', 'position: absolute; top: 0; left: 0;');

    semiCircle.appendChild(motionAnimation);
    semiCircle.appendChild(colorAnimation);
    semiCircle.appendChild(scaleAnimation);
    newSvg.appendChild(semiCircle);

    svgContainer.appendChild(newSvg);

    setTimeout(() => {
      svgContainer.removeChild(newSvg);
    }, 45000);
  }
}
