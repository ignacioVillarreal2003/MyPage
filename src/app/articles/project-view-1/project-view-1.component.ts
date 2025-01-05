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
  backgroundColors: string[] = ['#faabab', '#7cccbe', '#97c2d9', '#f76c6c'];

  currentScreen = 1;
  totalScreens = 4;
  isScrolling = false;

  constructor(private backgroundService: BackgroundDetectorService) {}

  onScroll(event: WheelEvent) {
    if (this.isScrolling) return;
    this.isScrolling = true;
    setTimeout(() => (this.isScrolling = false), 800); // Tiempo para la animación

    const sectionHeight = this.getCurrentSectionHeight();
    const scrollPosition = window.scrollY;

    // Si estamos en la sección 3 (con 200vh) y el usuario hace scroll hacia abajo
    if (this.currentScreen === 3 && event.deltaY > 0) {
      // Si estamos al final de la sección 200vh
      if (scrollPosition + window.innerHeight >= sectionHeight) {
        this.navigateToScreen(this.currentScreen + 1);
      }
    }
    // Si estamos en la sección 3 (con 200vh) y el usuario hace scroll hacia arriba
    else if (this.currentScreen === 3 && event.deltaY < 0) {
      // Si estamos al principio de la sección 200vh
      if (scrollPosition <= 0) {
        this.navigateToScreen(this.currentScreen - 1);
      }
    }
      // Si estamos subiendo desde la sección 4 (o cualquier otra sección de 100vh)
    // hacia la sección de 200vh (sección 3)
    else if (event.deltaY < 0 && this.currentScreen === 4) {
        this.navigateToScreen(3);
        // Usamos un setTimeout para aplicar el scroll después de un pequeño retraso
        setTimeout(() => {
          window.scrollTo({
            top: 200 * window.innerHeight,
          });
        }, 10);  // Retraso para permitir el cambio de sección
    }
    // Para las secciones normales de 100vh
    else if (event.deltaY > 0 && this.currentScreen < this.totalScreens) {
      this.navigateToScreen(this.currentScreen + 1);
    } else if (event.deltaY < 0 && this.currentScreen > 1) {
      this.navigateToScreen(this.currentScreen - 1);
    }
  }

  getCurrentSectionHeight() {
    if (this.currentScreen === 3) {
      // Si estamos en la sección de 200vh, devolver la altura de esa sección
      return 200 * window.innerHeight / 100; // 200vh
    }
    return window.innerHeight; // Para las secciones normales de 100vh
  }

  progressStep = 0;

  navigateToScreen(targetScreen: number): void {
    if (targetScreen === this.currentScreen) return;

    const direction = targetScreen > this.currentScreen ? 1 : -1;
    let toStep = 0
    if (direction == 1) {
      this.progressStep = 2 * (this.currentScreen - 1) + 1;
      toStep = 2 * (targetScreen - 1) + 1;
    } else {
      this.progressStep = 2 * (this.currentScreen - 1);
      toStep = 2 * (targetScreen - 1);
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
