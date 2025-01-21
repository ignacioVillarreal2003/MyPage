import { Component } from '@angular/core';
import { Shape3Component} from '../shapes/shape-3/shape-3.component';

@Component({
  selector: 'app-about-projects',
  imports: [Shape3Component],
  templateUrl: './about-projects.component.html',
  standalone: true,
  styleUrl: './about-projects.component.css'
})
export class AboutProjectsComponent {

}
