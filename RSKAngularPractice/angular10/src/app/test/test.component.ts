import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public name = "Rajitha";
  public baseUrl = window.location.href;
  public courseId = 123;
  isDisabled: boolean = true;
  required: boolean = true;
  data: any;
  public myChoice = "one";
  public subjects = ["angular", "react", "vueJs"]
  status: boolean = false;
  public date = new Date();
  public group = {
    "textColor": this.required,
    "textSize": this.required,
    "textFamily": this.required
  }
  public myColor = "blue";
  public myStyles = {
    "color": 'white',
    "background-color": 'black'
  }
  public fullNmae = "Rajitha sanepalli";
  public myName = "";
  @Input() public fromParent: any;
  @Output() public childInfo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  interpolation() {
    return "Welcome To:" + this.name

  }
  displayMsg() {
    this.myName = "Rajitha Sanepalli"
  }
  displayDom(message: any) {
    console.log(message)
  }
  fireEvent() {
    this.childInfo.emit("Iam from child")
  }
}
