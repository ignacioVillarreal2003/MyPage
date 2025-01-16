import { Component, Input } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-shape-1',
  imports: [NgFor, NgStyle],
  templateUrl: './shape-1.component.html',
  styleUrl: './shape-1.component.css',
  standalone: true
})
export class Shape1Component {
  @Input() indexColor: number = 0;
  circles: number[] = [];
  colors: { color1: string, color2: string }[] = [
    {
      color1: "#34c7f9",
      color2: "#d2f4ff"
    },
    {
      color1: "#fc1906",
      color2: "#fdb577"
    },
    {
      color1: "#9896ff",
      color2: "#dad8ff"
    },
    {
      color1: "#00827b",
      color2: "#71ece2"
    },
    {
      color1: "#fda50a",
      color2: "#fff896"
    },
    {
      color1: "#1573fe",
      color2: "#8ae5ff"
    }
  ];

  ngOnInit(): void {
    const totalCircles = 32;
    this.circles = Array(totalCircles).fill(0);    
  }
}
