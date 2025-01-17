import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./articles/header/header.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NgFor],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  groups = [
    {
      clipPath: 'clip-top',
      circles: [
        { x: 0, y: 50, delay: 0 },
        { x: 110, y: 50, delay: 300 },
        { x: 220, y: 50, delay: 600 },
        { x: 330, y: 50, delay: 900 },
      ],
      color1: '#39d1f9',
      color2: '#a7e9fd',
    },
    {
      clipPath: 'clip-bottom',
      circles: [
        { x: 0, y: 50, delay: 0 },
        { x: 110, y: 50, delay: 300 },
        { x: 220, y: 50, delay: 600 },
        { x: 330, y: 50, delay: 900 },
      ],
      color1: '#008aff',
      color2: '#00aeff',
    },
  ];

  constructor() {
    this.animateCircles();
  }

  animateCircles() {
    this.groups.forEach((group) => {
      group.circles.forEach((circle) => {
        const initialY = circle.y;
        const amplitude = 30;

        setInterval(() => {
          const time = (Date.now() + circle.delay) / 3000;
          circle.y = initialY + amplitude * Math.sin(time * Math.PI);
        }, 14);
      });
    });
  }
}
