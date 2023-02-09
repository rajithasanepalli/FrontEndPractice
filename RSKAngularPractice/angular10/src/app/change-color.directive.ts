import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private _elementRef: ElementRef) {
    this._elementRef.nativeElement.style.color = "green"
  }

  @HostListener('mouseenter') mouseEnter() {
    this.changeColor("yellow")
  }
  @HostListener('mouseleave') mouseleave() {
    this.changeColor("orange")
  }
  changeColor(color: any) {
    this._elementRef.nativeElement.style.color = color
  }
}
