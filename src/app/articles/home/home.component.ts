import { Component } from '@angular/core';
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
    private summaryCardService: SummaryCardService
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
}
