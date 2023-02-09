import { AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren, ViewChildrenDecorator } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ChildComponent } from './child/child.component';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  // @ViewChild("mouri") marker: any;
  // @ViewChildren("mouri") marker: any;
  @ViewChild("child") marker: any;



  constructor(@Inject(StudentService) private stdService: any) {
    console.log(this.stdService);



  }
  // ngAfterViewInit() {
  //   this.marker.first.nativeElement.style.color = "green"
  //   this.marker.last.nativeElement.style.color = "blue"


  // }
  // ngOnInit() {
  //   console.log("raji")

  // }

  inc() {
    this.marker.increment();
  }
  dec() {
    this.marker.decrement();
  }

}


