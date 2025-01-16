import { Component, ElementRef, Input } from '@angular/core';
import { randInt } from 'three/src/math/MathUtils.js';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-shape-4',
  imports: [NgStyle],
  templateUrl: './shape-4.component.html',
  styleUrl: './shape-4.component.css',
  standalone: true
})
export class Shape4Component {
  @Input() indexShape = 0;
  shapes: { rotation: string, animationDelay: string, color1: string, color2: string, color3: string }[] = [
    {
      rotation: "45deg",
      animationDelay: "0s",
      color1: "#9ae6fc",
      color2: "#34c7f9",
      color3: "#d2f4ff"
    },
    {
      rotation: "60deg",
      animationDelay: "-1.33s",
      color1: "#fc6a27",
      color2: "#fc1906",
      color3: "#fdb577"
    },
    {
      rotation: "20deg",
      animationDelay: "-0.44s",
      color1: "#bdbbff",
      color2: "#9896ff",
      color3: "#dad8ff"
    },
    {
      rotation: "0deg",
      animationDelay: "-2s",
      color1: "#39beb7",
      color2: "#00827b",
      color3: "#71ece2"
    },
    {
      rotation: "30deg",
      animationDelay: "-0.3s",
      color1: "#fdcd09",
      color2: "#fda50a",
      color3: "#fff896"
    },
    {
      rotation: "80deg",
      animationDelay: "-1s",
      color1: "#149cff",
      color2: "#1573fe",
      color3: "#8ae5ff"
    },
  ];

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.randomHeight();
  }

  randomHeight(): void {
    const element: HTMLElement = this.elRef.nativeElement.querySelector('.shape-4') as HTMLElement;
    element.style.height = `${randInt(300, 700)}px`;
  }
}
