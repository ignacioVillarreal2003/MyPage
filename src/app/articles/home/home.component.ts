import { Component, ElementRef } from '@angular/core';
import { BackgroundDetectorService } from '../../services/background-detector.service';
import { SummaryCardComponent } from "../summary-card/summary-card.component";
import { NgIf } from '@angular/common';
import { SummaryCardService } from '../../services/summary-card.service';

@Component({
  selector: 'app-home',
  imports: [SummaryCardComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSummaryCardVisible: boolean = false;

  constructor(
    private backgroundService: BackgroundDetectorService,
    private summaryCardService: SummaryCardService,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.changeHeaderColor();
    this.isSummaryCardVisible = this.summaryCardService.isActive;
  }

  closeSummaryCard(): void {
    this.isSummaryCardVisible = false;
    this.summaryCardService.isActive = false;
  }

  changeHeaderColor() {
    this.backgroundService.setActiveBackgroundColor("#f76c6c");
  }

  activeHover(index: number) {
    const element1: HTMLElement = this.elRef.nativeElement.querySelector(".about h2") as HTMLElement;
    const element2: HTMLElement = this.elRef.nativeElement.querySelector(".projects h2") as HTMLElement;
    const element3: HTMLElement = this.elRef.nativeElement.querySelector(".soon h2") as HTMLElement;
    if (index == 0) {
      element1.classList.add("hover-text");
    } else if (index == 1) {
      element2.classList.add("hover-text");
    } else if (index == 2) {
      element3.classList.add("hover-text");
    }
  }

  disactiveHover(index: number) {
    const element1: HTMLElement = this.elRef.nativeElement.querySelector(".about h2") as HTMLElement;
    const element2: HTMLElement = this.elRef.nativeElement.querySelector(".projects h2") as HTMLElement;
    const element3: HTMLElement = this.elRef.nativeElement.querySelector(".soon h2") as HTMLElement;
    if (index == 0) {
      element1.classList.remove("hover-text");
    } else if (index == 1) {
      element2.classList.remove("hover-text");
    } else if (index == 2) {
      element3.classList.remove("hover-text");
    }
  }
}
