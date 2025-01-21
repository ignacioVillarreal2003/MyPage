import { Component } from '@angular/core';
import { Shape4Component} from '../shapes/shape-4/shape-4.component';

@Component({
  selector: 'app-skills',
  imports: [Shape4Component],
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
