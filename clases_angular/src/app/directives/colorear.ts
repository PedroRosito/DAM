import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorear]',
  standalone: true
})
export class Colorear {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  mouseEnter () {
    this.colorear('blue')
  }

  @HostListener('mouseleave')
  mouseLeave () {
    this.colorear('')
  }

  colorear (color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
