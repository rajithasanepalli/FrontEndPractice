import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public message: string = "iam from parent"

  constructor() { }

  ngOnInit(): void {
    console.log(this.msg)
  }
  msg($event: any) {
    this.msg = $event;
  }

}
