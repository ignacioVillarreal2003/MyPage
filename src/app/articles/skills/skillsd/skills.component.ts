import {Component, HostListener} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    NgForOf,
    NgIf,
    NgStyle
  ],
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillsList: string[] = [
    "Base de datos relacional",
    "Modelado MER",
    "Normalización",
    "Diseño",
    "Consultas SQL",
    "PostgreSQL",
    "Base de datos no relacional",
    "MongoDB",
    "-",
    "Desarrollo de APIs REST",
    "ASP.NET Core",
    "Node.js",
    "PHP Slim Framework",
    "Java Spring Boot",
    "Arquitecturas controladores y servicios",
    "Clean Architecture",
    "Microservicios",
    "-",
    "Angular",
    "Desarrollo de interfaces de usuario",
    "JS, HTML y CSS",
    "Responsive design",
    "Consumo de APIs",
    "-",
    "Algoritmos",
    "Estructura de datos",
    "-",
    "POO",
    "Principios SOLID",
    "Patrones de diseño",
    "Programación funcional",
    "-",
    "Análisis de requerimientos",
    "Casos de Uso y Escenarios",
    "Diagramas UML",
    "Diseño de arquitectura",
    "-",
    "OWASP Top 10",
    "Análisis estático y dinámico",
    "-",
    "Metodologías Ágiles",
    "Documentación Técnica",
    "Git",
    "Cloud Computing (Azure)",
    "Desarrollo Full Stack"
  ];

  offsetsSkills: number[] = [];

  ngOnInit(): void {
    this.offsetsSkills = this.skillsList.map(() => 1200);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const listElements: NodeListOf<HTMLElement> = document.querySelectorAll('.skill-list li');
    const windowHeight: number = window.innerHeight;

    listElements.forEach((el: HTMLElement, index: number): void => {
      const rect: DOMRect = el.getBoundingClientRect();

      const start: number = windowHeight;
      const end: number = 600;

      if (rect.top <= start && rect.bottom >= end) {
        const range: number = start - end;
        const progress: number = Math.min(
          1,
          Math.max(0, (start - rect.top) / range)
        );

        const adjustedProgress: number = Math.min(1, progress * 1.5);

        this.offsetsSkills[index] = 1200 - (1200 * adjustedProgress);

        if (adjustedProgress >= 1) {
          this.offsetsSkills[index] = 0;
        }
      }
    });
  }
}
