import { Component } from '@angular/core';
import { BackgroundDetectorService } from '../../services/background-detector.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private backgroundService: BackgroundDetectorService) { }
  
  ngOnInit(): void {
    this.changeHeaderColor()
  }

  changeHeaderColor() {
    this.backgroundService.setActiveBackgroundColor("#f76c6c");
  }
}
