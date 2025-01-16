import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryCardService {

  constructor() {
    const storedValue = localStorage.getItem('summaryCardIsActive');
    this.isActive = storedValue ? JSON.parse(storedValue) : true;
  }

  private _isActive: boolean = true;

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
    localStorage.setItem('summaryCardIsActive', JSON.stringify(value));
  }
}
