import {Component, ElementRef} from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';
import {BackgroundDetectorService} from '../../services/background-detector.service';

@Component({
  selector: 'app-projects',
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './projects.component.html',
  standalone: true,
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  color: string[] = ['#faabab', '#7cccbe', '#97c2d9', '#acabab'];
  currentScreen: number = 1;
  totalScreens: number = 4;

  constructor(private backgroundService: BackgroundDetectorService) {}

  ngOnInit(): void {
    this.changeHeaderColor()
  }

  onScroll(event: WheelEvent) {
    if (event.deltaY > 0 && this.currentScreen < this.totalScreens) {
      this.currentScreen++;
    } else if (event.deltaY < 0 && this.currentScreen > 1) {
      this.currentScreen--;
    }
    this.changeHeaderColor()
  }

  changeHeaderColor() {
    this.backgroundService.setActiveBackgroundColor(this.color[this.currentScreen - 1]);
  }
}
