import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './articles/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {

}
