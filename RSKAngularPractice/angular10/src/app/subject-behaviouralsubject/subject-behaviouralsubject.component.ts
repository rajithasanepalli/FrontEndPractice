import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-subject-behaviouralsubject',
  templateUrl: './subject-behaviouralsubject.component.html',
  styleUrls: ['./subject-behaviouralsubject.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectBehaviouralsubjectComponent implements OnInit {
  // subject = new Subject();
  //subject = new BehaviorSubject(0);
  promise: any;
  observable$: Observable<number>;
  observableData: any;
  constructor() {

    this.promise = this.getpromise();
    this.observable$ = this.getObervable();
    this.subscribeObservable();
  }

  ngOnInit() {

    //observable
    // let obervable = interval(1000);
    // let obs1 = obervable.subscribe(value => {
    //   console.log("first subscriber value:" + value)
    // });
    // setTimeout(() => {
    //   let obs2 = obervable.subscribe(value => {
    //     console.log("second subscriber value:" + value)
    //   })
    //   obs1.unsubscribe();
    //   setTimeout(() => {
    //     obs2.unsubscribe();
    //   }, 4000);
    // }, 7000);


    //subject
    // let observable = interval(1000);
    // observable.subscribe((value) => {
    //   this.subject.next(value)
    // });
    // let obs1 = this.subject.subscribe((value) => {
    //   console.log("first subscriber:" + value)
    // });
    // setTimeout(() => {
    //   let obs2 = this.subject.subscribe((value) => {
    //     console.log("second subscriber:" + value);
    //     obs1.unsubscribe();
    //     setTimeout(() => {
    //       obs2.unsubscribe();
    //     }, 2000);
    //   })
    // }, 6000);

  }

  getpromise() {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        console.log("async pipe for promise")
        resolve("promise runninng")
      }, 3000);
    })
  }
  getObervable() {
    return interval(1000).pipe(take(5), map(value => value + 1))
  }
  subscribeObservable() {
    this.observable$.subscribe(value => this.observableData = value)
  }
}
