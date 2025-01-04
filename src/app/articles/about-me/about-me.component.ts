import {Component, HostListener} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {AboutSummaryComponent} from './about-summary/about-summary.component';
import {SkillsComponent} from './skills/skills.component';
import {ImagePresentationComponent} from './image-presentation/image-presentation.component';
import {PresentationComponent} from './presentation/presentation.component';
import {SomeProjectsComponent} from './some-projects/some-projects.component';

@Component({
  selector: 'app-about-me',
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    AboutSummaryComponent,
    SkillsComponent,
    ImagePresentationComponent,
    PresentationComponent,
    SomeProjectsComponent
  ],
  templateUrl: './about-me.component.html',
  standalone: true,
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
