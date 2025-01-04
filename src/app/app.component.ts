import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import {AboutMeComponent} from './articles/about-me/about-me.component';
import {SkillsComponent} from './articles/about-me/skills/skills.component';
import {HeaderComponent} from './articles/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgStyle, AboutMeComponent, SkillsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {

}
