import { Component } from '@angular/core';
import {Shape5Component} from '../shapes/shape-5/shape-5.component';

@Component({
  selector: 'app-about-photo',
  imports: [Shape5Component],
  templateUrl: './about-photo.component.html',
  styleUrl: './about-photo.component.css',
  standalone: true
})
export class AboutPhotoComponent {

}
