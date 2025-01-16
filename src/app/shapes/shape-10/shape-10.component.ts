import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-shape-10',
  imports: [],
  templateUrl: './shape-10.component.html',
  styleUrl: './shape-10.component.css',
  standalone: true
})
export class Shape10Component {
  @Input() indexShape: number = 0;
  shape: { color1: string, color2: string}[] = [
    {
      color1: "#008aff",
      color2: "#59c2ff"
    },
    {
      color1: "#ffb400",
      color2: "#ffd400"
    },
    {
      color1: "#00827b",
      color2: "#9acbc8"
    },
  ];

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const element1: HTMLElement = this.elRef.nativeElement.querySelector('.semi-circle-1') as HTMLElement;
    const element2: HTMLElement = this.elRef.nativeElement.querySelector('.semi-circle-2') as HTMLElement;
    const element3: HTMLElement = this.elRef.nativeElement.querySelector('.circle') as HTMLElement;
    element1.style.background = this.shape[this.indexShape].color1;
    element2.style.background = this.shape[this.indexShape].color2;
    if (this.indexShape == 0) {
      element3.style.transform = `rotate(${60}deg)`
      element3.classList.add('animation-1');
    } else if (this.indexShape == 0) {
      element3.style.transform = `rotate(${20}deg)`
      element3.classList.add('animation-2');
    } else {
      element3.style.transform = `rotate(${80}deg)`
      element3.classList.add('animation-3');
    } 
  }
}
