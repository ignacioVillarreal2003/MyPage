import { Component } from '@angular/core';
import {MenuHamburgerComponent} from '../menu-hamburger/menu-hamburger.component';

@Component({
  selector: 'app-header',
  imports: [
    MenuHamburgerComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  protected readonly console = console;
}
