import { Component, ElementRef, Input } from '@angular/core';
import { randInt } from 'three/src/math/MathUtils.js';

@Component({
  selector: 'app-shape-5',
  imports: [],
  templateUrl: './shape-5.component.html',
  styleUrl: './shape-5.component.css',
  standalone: true
})
export class Shape5Component {

  @Input() indexColor = 0;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.giveColor();
    this.animation1();
    this.animation2();
    this.animation3();
  }

  colors: { color1: string, color2: string, color3: string }[] = [
    {
      color1: "#9ae6fc",
      color2: "#36a4c8e4",
      color3: "#d2f4ff"
    },
    {
      color1: "#fc6a27",
      color2: "#de4233dd",
      color3: "#fdb577"
    },
    {
      color1: "#bdbbff",
      color2: "#9b9ad5d0",
      color3: "#dad8ff"
    },
    {
      color1: "#39beb7",
      color2: "#1eaaa3cc",
      color3: "#71ece2"
    }
  ];

  giveColor(): void {
    const line1Square1: HTMLElement = this.elRef.nativeElement.querySelector('.line-1 .square-1') as HTMLElement;
    const line1Square2: HTMLElement = this.elRef.nativeElement.querySelector('.line-1 .square-2') as HTMLElement;
    const line1Square3: HTMLElement = this.elRef.nativeElement.querySelector('.line-1 .square-3') as HTMLElement;
    const line1Circle1: HTMLElement = this.elRef.nativeElement.querySelector('.line-1 .circle-1') as HTMLElement;
    const line2Square1: HTMLElement = this.elRef.nativeElement.querySelector('.line-2 .square-1') as HTMLElement;
    const line2Square2: HTMLElement = this.elRef.nativeElement.querySelector('.line-2 .square-2') as HTMLElement;
    const line2Square3: HTMLElement = this.elRef.nativeElement.querySelector('.line-2 .square-3') as HTMLElement;
    const line2Circle1: HTMLElement = this.elRef.nativeElement.querySelector('.line-2 .circle-1') as HTMLElement;
    const line3Square1: HTMLElement = this.elRef.nativeElement.querySelector('.line-3 .square-1') as HTMLElement;
    const line3Square2: HTMLElement = this.elRef.nativeElement.querySelector('.line-3 .square-2') as HTMLElement;
    const line3Circle1: HTMLElement = this.elRef.nativeElement.querySelector('.line-3 .circle-1') as HTMLElement;
    line1Square1.style.backgroundColor = this.colors[this.indexColor].color1;
    line1Square2.style.backgroundColor = this.colors[this.indexColor].color2;
    line1Square3.style.backgroundColor = this.colors[this.indexColor].color3;
    line1Circle1.style.backgroundColor = this.colors[this.indexColor].color1;
    line2Square1.style.backgroundColor = this.colors[this.indexColor].color1;
    line2Square2.style.backgroundColor = this.colors[this.indexColor].color2;
    line2Square3.style.backgroundColor = this.colors[this.indexColor].color3;
    line2Circle1.style.backgroundColor = this.colors[this.indexColor].color1;
    line3Square1.style.backgroundColor = this.colors[this.indexColor].color1;
    line3Square2.style.backgroundColor = this.colors[this.indexColor].color2;
    line3Circle1.style.backgroundColor = this.colors[this.indexColor].color1;
  }

  random1: number = 0;

  animation1(): any {
    setInterval(() => {
      this.random1 = randInt(0, 2);
      const line1Square1: HTMLElement = this.elRef.nativeElement.querySelector('.line-1 .square-1') as HTMLElement;
      const line1Square2: HTMLElement = this.elRef.nativeElement.querySelector('.line-1 .square-2') as HTMLElement;
      const line1Square3: HTMLElement = this.elRef.nativeElement.querySelector('.line-1 .square-3') as HTMLElement;
      const line1Circle1: HTMLElement = this.elRef.nativeElement.querySelector('.line-1 .circle-1') as HTMLElement;
      if (this.random1 == 0) {
        line1Square1.style.width = "350px";
        line1Square2.style.width = "50px";
        line1Square3.style.width = "200px";
        line1Circle1.style.width = "30px";
      } else if (this.random1 == 1) {
        line1Square1.style.width = "250px";
        line1Square2.style.width = "30px";
        line1Square3.style.width = "200px";
        line1Circle1.style.width = "150px";
      } else {
        line1Square1.style.width = "300px";
        line1Square2.style.width = "150px";
        line1Square3.style.width = "150px";
        line1Circle1.style.width = "30px";
      }
    }, 1000);
  }

  random2: number = 0;

  animation2(): any {
    setInterval(() => {
      this.random2 = randInt(0, 3);
      const line2Square1: HTMLElement = this.elRef.nativeElement.querySelector('.line-2 .square-1') as HTMLElement;
      const line2Square2: HTMLElement = this.elRef.nativeElement.querySelector('.line-2 .square-2') as HTMLElement;
      const line2Square3: HTMLElement = this.elRef.nativeElement.querySelector('.line-2 .square-3') as HTMLElement;
      const line2Circle1: HTMLElement = this.elRef.nativeElement.querySelector('.line-2 .circle-1') as HTMLElement;
      if (this.random2 == 0) {
        line2Square1.style.width = "100px";
        line2Square2.style.width = "350px";
        line2Square3.style.width = "80px";
        line2Circle1.style.width = "50px";
      } else if (this.random2 == 1) {
        line2Square1.style.width = "50px";
        line2Square2.style.width = "250px";
        line2Square3.style.width = "250px";
        line2Circle1.style.width = "30px";
      } else if (this.random2 == 2) {
        line2Square1.style.width = "50px";
        line2Square2.style.width = "230px";
        line2Square3.style.width = "200px";
        line2Circle1.style.width = "100px";
      } else {
        line2Square1.style.width = "150px";
        line2Square2.style.width = "250px";
        line2Square3.style.width = "150px";
        line2Circle1.style.width = "30px";
      }
    }, 2000);
  }

  random3: number = 0;

  animation3(): any {
    setInterval(() => {
      this.random2 = randInt(0, 2);
      const line3Square1: HTMLElement = this.elRef.nativeElement.querySelector('.line-3 .square-1') as HTMLElement;
      const line3Square2: HTMLElement = this.elRef.nativeElement.querySelector('.line-3 .square-2') as HTMLElement;
      const line3Circle1: HTMLElement = this.elRef.nativeElement.querySelector('.line-3 .circle-1') as HTMLElement;
      if (this.random3 == 0) {
        line3Square1.style.width = "100px";
        line3Square2.style.width = "250px";
        line3Circle1.style.width = "30px";
      } if (this.random3 == 1) {
        line3Square1.style.width = "230px";
        line3Square2.style.width = "100px";
        line3Circle1.style.width = "50px";
      } else {
        line3Square1.style.width = "200px";
        line3Square2.style.width = "150px";
        line3Circle1.style.width = "30px";
      }
    }, 1500);
  }
}
