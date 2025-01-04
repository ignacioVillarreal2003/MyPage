import { Component } from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-project-view-1',
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './project-view-1.component.html',
  standalone: true,
  styleUrl: './project-view-1.component.css'
})
export class ProjectView1Component {
  color: string[] = ['#faabab', '#7cccbe', '#97c2d9', '#f76c6c'];

  currentScreen = 1;
  totalScreens = 4;
  isScrolling = false;

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
        this.currentScreen++;  // Cambiar a la siguiente sección
      }
    }
    // Si estamos en la sección 3 (con 200vh) y el usuario hace scroll hacia arriba
    else if (this.currentScreen === 3 && event.deltaY < 0) {
      // Si estamos al principio de la sección 200vh
      if (scrollPosition <= 0) {
        this.currentScreen--;  // Cambiar a la sección anterior
      }
    }
      // Si estamos subiendo desde la sección 4 (o cualquier otra sección de 100vh)
    // hacia la sección de 200vh (sección 3)
    else if (event.deltaY < 0 && this.currentScreen === 4) {
        this.currentScreen = 3;
        // Usamos un setTimeout para aplicar el scroll después de un pequeño retraso
        setTimeout(() => {
          window.scrollTo({
            top: 200 * window.innerHeight,
          });
        }, 10);  // Retraso para permitir el cambio de sección
    }
    // Para las secciones normales de 100vh
    else if (event.deltaY > 0 && this.currentScreen < this.totalScreens) {
      this.currentScreen++;
    } else if (event.deltaY < 0 && this.currentScreen > 1) {
      this.currentScreen--;
    }
  }

  getCurrentSectionHeight() {
    if (this.currentScreen === 3) {
      // Si estamos en la sección de 200vh, devolver la altura de esa sección
      return 200 * window.innerHeight / 100; // 200vh
    }
    return window.innerHeight; // Para las secciones normales de 100vh
  }
}
