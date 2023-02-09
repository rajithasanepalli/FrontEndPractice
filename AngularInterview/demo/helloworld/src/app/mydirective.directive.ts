import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(_e1: ElementRef) {
    _e1.nativeElement.style.backgroundColor = 'yellow';

  }
  @HostBinding('style.color') bgcolor: any;
  @HostListener('click') clickMethod() {
    this.bgcolor = "blue";
  }
  // @HostListener('mouseover') mouseover() {
  //   this.bgcolor = "red";
  // }
  @HostListener('mouseout') mouseOut() {
    this.bgcolor = 'green';
  }

}






