import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundDetectorService {

  private activeBackgroundColor: BehaviorSubject<string> = new BehaviorSubject<string>('white');
  activeBackgroundColor$: Observable<any> = this.activeBackgroundColor.asObservable();

  setActiveBackgroundColor(color: string): void {
    this.activeBackgroundColor.next(color);
  }
}
