import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/interval';
import 'rxjs/add/Observable/map';
import 'rxjs/add/Observable/takeWhile';
import 'rxjs/add/Observable/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron-app';
  max = 1;  // total length of timer
  current = 0; // current second timer is at

start() {
  const interval = Observable.interval(100);
}


  // Getters to prevent NaN errors
  // Error if value is not a number
  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max; // ensures max value is always a number and >= 0.1
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current; // ensures current value is always a number and >= 0 
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }
}
