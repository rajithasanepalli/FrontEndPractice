import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public counter: number = 0;

  @Input() public parent: any;

  @Output() public childInfo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  fireEvent() {
    this.childInfo.emit("iam from child")
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
