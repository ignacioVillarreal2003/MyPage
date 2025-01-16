import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  imports: [],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css',
  standalone: true
})
export class SummaryCardComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
