import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takewhile';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  max = 1;
  current = 0;
  isFinished = false;
  start() {
    const interval = Observable.interval(100);
    interval.takeWhile(_ => !this.isFinished )
    .do(i => this.current += 0.1)
    .subscribe();
  }
// Finish Timer
  finish() {
    this.current = this.max;
  }
// Reset Timer
    reset() {
      this.current = 0;
    }


  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return this.currentVal >= this.maxVal;
  }
}
