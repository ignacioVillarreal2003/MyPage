import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-shape-6',
  imports: [
    NgForOf
  ],
  templateUrl: './shape-6.component.html',
  standalone: true,
  styleUrl: './shape-6.component.css'
})
export class Shape6Component {
  @Input() indexColor: number = 0;
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
  ring1: number[] = Array(36).fill(0);
  ring2: number[] = Array(24).fill(0);
  step1: number = 360 / this.ring1.length;
  step2: number = 360 / this.ring2.length;
}
