import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-multicating-observable',
  templateUrl: './multicating-observable.component.html',
  styleUrls: ['./multicating-observable.component.scss']
})
export class MulticatingObservableComponent implements OnInit {

  public number = 10;
  public subjects = ["angular", "React"];
  public employee = {
    'name': "Raji",
    "salary": "25000"
  }
  constructor() { }

  ngOnInit() {
    let obervable = of(this.number, this.subjects, this.employee);
    obervable.subscribe((result) => {
      console.log(result)
    });
    setTimeout(() => {
      obervable.subscribe((result) => {
        console.log(result)
      })

    }, 2000);
  }

}
