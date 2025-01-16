import { Component, ViewChild } from '@angular/core';
import { Shape6Component } from '../../../shapes/shape-6/shape-6.component';

@Component({
  selector: 'app-about-engineer',
  imports: [Shape6Component],
  templateUrl: './about-engineer.component.html',
  styleUrl: './about-engineer.component.css',
  standalone: true
})
export class AboutEngineerComponent {
  @ViewChild(Shape6Component) shapeComponent!: Shape6Component;

  hoverText(on: boolean) {    
    if (on) {
      this.shapeComponent.hoverOn();
    } else {
      this.shapeComponent.hoverOff();
    }
  }
}
