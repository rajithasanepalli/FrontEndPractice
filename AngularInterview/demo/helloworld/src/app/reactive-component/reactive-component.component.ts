import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-component',
  templateUrl: './reactive-component.component.html',
  styleUrls: ['./reactive-component.component.css']
})
export class ReactiveComponentComponent implements OnInit {
  public country = [
    "USA",
    "CANADA"

  ]
  registationForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    check: new FormControl()


  })

  constructor() { }

  ngOnInit(): void {
  }

}
