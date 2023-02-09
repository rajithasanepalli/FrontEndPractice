import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  opened = false;
  userName = "Rajitha Sanepalli";
  viewProfile = false;
  constructor() { }

  ngOnInit(): void {
  }
  profileView() {
    this.viewProfile = true;
  }
  myChange(index: any) {
    console.log(index)

  }
}
