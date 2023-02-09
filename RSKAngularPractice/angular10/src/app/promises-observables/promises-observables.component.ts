import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promises-observables',
  templateUrl: './promises-observables.component.html',
  styleUrls: ['./promises-observables.component.scss']
})
export class PromisesObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //promoses
    // let promise = new Promise((resolve) => {
    //   resolve("promise emitted")
    // })
    // promise.then(value => {
    //   console.log(value)
    // })
    //observables
    //   let observable = new Observable((observer) => {
    //     observer.next("observable emitted")
    //   })
    //   observable.subscribe(value => {
    //     console.log(value)
    //   })


    //promises emits single values

    // let promise = new Promise((resolve) => {
    //   resolve("Iam Raji")
    //   resolve("I am in mouritech")
    // })
    // promise.then(value => {
    //   console.log(value)
    // })



    //Observables emits multiples values over a period of time

    // let observable = new Observable((observer) => {
    //   observer.next("iam raji")
    //   observer.next("Iam working in mouritech")
    // })
    // observable.subscribe(result => {
    //   console.log(result)
    // })

    //obeservable can be cancellable by unsubscribe method

    let observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next("observable running")
      }, 1000);
    })
    let ob = observable.subscribe((result) => {
      console.log(result)
    })
    ob.unsubscribe();
  }

}
