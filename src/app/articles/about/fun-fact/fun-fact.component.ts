import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgFor } from '@angular/common';
import { randInt } from 'three/src/math/MathUtils.js';
import { Shape4Component } from "../../../shapes/shape-4/shape-4.component";

@Component({
  selector: 'app-fun-fact',
  imports: [NgFor, Shape4Component],
  templateUrl: './fun-fact.component.html',
  styleUrl: './fun-fact.component.css',
  standalone: true
})
export class FunFactComponent {
  indexFact = 0;
  facts: string[] = [
    "Toco el piano para desconectar del código, y a veces las mejores ideas surgen en medio de una melodía.",
    "Mi interés por la informática comenzó gracias a los videojuegos. Lo curioso es que ahora paso más tiempo programando que jugando.",
    "Mis tres palabras favoritas: aprender, crear y mejorar. No hay un día en que no intente hacer algo nuevo.",
    "Hago ejercicio todos los días, no solo para mantenerme activo, sino porque las mejores ideas suelen aparecer mientras corro o hago pesas.",
    "Mi curiosidad nunca descansa. Una vez pasé una noche entera tratando de entender un error en mi código, solo para descubrir que era un punto y coma perdido.",
    "Cada proyecto personal que hago es como mi pequeño Frankenstein: lo creo, lo pruebo y a veces hasta me sorprende lo que hace.",
    "Creo que la música y la programación tienen algo en común: ambas son lenguajes que requieren creatividad y precisión.",
    "Siempre busco libros que desafíen mi forma de pensar. Es como actualizar el sistema operativo de mi mente.",
    "Soy capaz de resolver problemas de código complejo, pero todavía se me quema el arroz cuando cocino."
  ];
  @ViewChildren(Shape4Component) shapeComponents!: QueryList<Shape4Component>;

  randomFact(): void {
    let newFact = randInt(0, this.facts.length - 1);
    while (newFact === this.indexFact) {
      newFact = randInt(0, this.facts.length - 1);
    }
    this.indexFact = newFact;
    this.shapeComponents.forEach((shape) => shape.randomHeight());
  }
}
