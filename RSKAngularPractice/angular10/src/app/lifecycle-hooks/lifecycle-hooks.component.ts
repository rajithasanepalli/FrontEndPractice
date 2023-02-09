import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck {

  @Input() myNumber: any;
  constructor() { }


  ngOnChanges(changes: SimpleChanges) {
    const newNumberChange: SimpleChange = changes.myNumber;
    console.log("ngOnChanges()---> previous value:", newNumberChange.previousValue);
    console.log("ngOnChanges()---> current value:", newNumberChange.currentValue)

  }
  ngOnInit() {
    console.log("ngOnInit()--> value:", this.myNumber)
  }
  ngDoCheck() {
    console.log("ngDoCheck()-->value:", this.myNumber)

  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit()-->", "it trigger only once")

  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked()-->", "It exectes every time agter ngAfterContentInit")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit()->", "it executes only once after content init")
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked()->", "it executes evry time after content init")
  }
  ngOnDestroy() {
    console.log("ngOnDestroy()->", "component has been Destroyed")
  }
}
