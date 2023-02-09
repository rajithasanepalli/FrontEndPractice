import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'angular10';
  public parentMsg = "Iam from Parent";
  childMsg: any;
  isVisible: boolean = true;
  public myNumber: number = 10;
  get counter() {
    return this.myNumber
  }
  set counter(value) {
    this.myNumber = value
  }
  incCounter() {
    this.counter++
  }
  decCounter() {
    this.counter--
  }
  destroy() {
    this.isVisible = false
  }
}

