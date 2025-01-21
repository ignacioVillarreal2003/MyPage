import {Component, ElementRef} from '@angular/core';
import { NgStyle, NgFor } from '@angular/common';
import {Shape6Component} from '../shapes/shape-6/shape-6.component';
import {BackgroundDetectorService} from '../../../services/background-detector.service';

@Component({
  selector: 'app-timeline',
  imports: [NgStyle, NgFor, Shape6Component],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  standalone: true
})
export class TimelineComponent {
  blockIndex: number = 0;
  blocks: { title: string, content: string, background: string }[] = [{
    "title": "31 de diciembre de 2003: Nacimiento",
    "content": "Nací en Paso de la Arena, Uruguay. Desde pequeño, siempre fui un niño curioso, fascinado por entender cómo funcionaban las cosas a mi alrededor. Crecí en un ambiente familiar lleno de valores y aprendizajes, junto a mis padres y mi hermana.",
    "background": "#9ae6fc"
  },
  {
    "title": "2015: Primer acercamiento a la informática",
    "content": "A los 12 años, comencé mis estudios secundarios en el Liceo N°54. Durante este período, descubrí mi pasión por la informática. Tuve la increíble experiencia de construir mi primera computadora sumergida en líquido desde cero, lo que consolidó mi interés por la tecnología y la innovación.",
    "background": "#fc6a27"
  },
  {
    "title": "2018: Bachillerato en el IAVA",
    "content": "Con 15 años, ingresé al IAVA, un lugar que marcó una etapa muy especial en mi vida. Aquí desarrollé un fuerte interés por las matemáticas y las ciencias, disciplinas que me inspiraron a pensar de manera crítica y a encontrar soluciones creativas a problemas complejos.",
    "background": "#bdbbff"
  },
  {
    "title": "2021: Comienzo de mi formación universitaria",
    "content": "A los 18 años, fui aceptado en la Universidad Católica del Uruguay con una beca que obtuve gracias a mi dedicación. Este fue un logro que me llenó de orgullo y marcó el inicio de mi camino hacia la ingeniería informática. La universidad no solo me permitió adquirir conocimientos técnicos, sino también crecer como persona.",
    "background": "#39beb7"
  },
  {
    "title": "2024: Superando los primeros años de mi carrera",
    "content": "Después de tres años de esfuerzo, superé con éxito los desafíos iniciales de la carrera. Este período estuvo lleno de aprendizajes significativos, tanto académicos como personales. He conocido personas increíbles, trabajado en proyectos apasionantes y expandido mis horizontes en el mundo de la tecnología.",
    "background": "#fdcd09"
  },
  {
    "title": "Futuro: Construyendo nuevos horizontes",
    "content": "Hoy, sigo avanzando con determinación en mi carrera y en mi vida profesional. Estoy emocionado por los desafíos que el futuro traerá y por la oportunidad de contribuir al desarrollo tecnológico mientras continuo aprendiendo y creciendo.",
    "background": "#149cff"
  }
  ];

  constructor(private backgroundService: BackgroundDetectorService) { }

  changeBackground(): void {
    const bgColor: string = this.blocks[this.blockIndex].background;
    this.backgroundService.setActiveBackgroundColor(bgColor);
  }
}
