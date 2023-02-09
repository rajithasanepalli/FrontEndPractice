import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent implements OnInit {
  //subject = new Subject();
  //subject = new BehaviorSubject(0);
  @Input() public parentmsg: any;
  @Output() public childInfo = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    // let obs = interval(2000);
    // let sub1 = obs.subscribe(value => {
    //   console.log("first subscriber" + value)
    // })
    // setTimeout(() => {
    //   let sub2 = obs.subscribe(value => {
    //     console.log("second subscriber" + value)
    //   })
    //   sub1.unsubscribe();
    //   setTimeout(() => {
    //     sub2.unsubscribe();
    //   }, 7000)

    // }, 4000)




    //   obs.subscribe(value => {
    //     this.subject.next(value)
    //   });
    //   this.subject.subscribe(data => {
    //     console.log("first subscriber" + data)
    //   })
    //   setTimeout(() => {
    //     this.subject.subscribe(data => {
    //       console.log("secomd Subcriber" + data)
    //     })
    //   }, 4000)

    let promise = new Promise((resolve, reject) => {
      console.log("iam promise")
      resolve("promise running")

    })

    promise.then((posRes) => {
      console.log(posRes)

    }, (errRes) => {

    })



  }


  // fireEvent() {
  //   this.childInfo.emit("this is child")
  // }

}
