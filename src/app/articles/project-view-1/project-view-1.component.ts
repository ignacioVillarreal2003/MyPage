import { Component } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import { BackgroundDetectorService } from '../../services/background-detector.service';

@Component({
  selector: 'app-project-view-1',
  imports: [
    NgIf,
    NgStyle,
    NgForOf
  ],
  templateUrl: './project-view-1.component.html',
  standalone: true,
  styleUrl: './project-view-1.component.css'
})
export class ProjectView1Component {
  backgroundColors: string[] = ['#faabab', '#7cccbe', '#97c2d9', '#f76c6c', 'a25b8d'];

  screensHeight: number[] = [1, 1, 2, 1, 2]
  
  currentScreen = 1;
  totalScreens = 5;
  isScrolling = false;

  constructor(private backgroundService: BackgroundDetectorService) {}

  onScroll(event: WheelEvent) {
    if (this.isScrolling) return;
    this.isScrolling = true;
    setTimeout(() => (this.isScrolling = false), 800);

    const sectionHeight = window.innerHeight * this.screensHeight[this.currentScreen - 1];
    const scrollPosition = window.scrollY;
        
    if (this.screensHeight[this.currentScreen - 1] === 2 && event.deltaY > 0 && this.currentScreen < this.totalScreens) {
      if (scrollPosition + window.innerHeight >= sectionHeight) {
        this.navigateToScreen(this.currentScreen + 1);
      }
    }
    else if (this.screensHeight[this.currentScreen - 1] === 2 && event.deltaY < 0 && this.currentScreen > 1) {
      if (scrollPosition <= 0) {
        this.navigateToScreen(this.currentScreen - 1);
      }
    }
    else if (event.deltaY > 0 && this.currentScreen < this.totalScreens) {
      this.navigateToScreen(this.currentScreen + 1);
    } 
    else if (event.deltaY < 0 && this.currentScreen > 1) {
      this.navigateToScreen(this.currentScreen - 1);
    }
  }

  progressStep = 0;

  navigateToScreen(targetScreen: number): void {
    if (targetScreen === this.currentScreen) return;

    const direction = targetScreen > this.currentScreen ? 1 : -1;
    let toStep = 0
    if (direction == 1) {
      this.progressStep = 3 * (this.currentScreen - 1) + 1;
      toStep = 3 * (targetScreen - 1) + 1;
    } else {
      this.progressStep = 3 * (this.currentScreen - 1);
      toStep = 3 * (targetScreen - 1);
    }
    const totalSteps = this.progressStep + direction * toStep;

    this.currentScreen = targetScreen;
    this.changeHeaderColor();

    const interval = setInterval(() => {      
      this.progressStep += direction;

      if (this.progressStep == toStep) {
        clearInterval(interval);
        this.progressStep = 0;
      }
    }, 2000/totalSteps);
  }

  
  ngOnInit(): void {
    this.changeHeaderColor()
  }

  changeHeaderColor() {
    this.backgroundService.setActiveBackgroundColor(this.backgroundColors[this.currentScreen - 1]);
  }
}
