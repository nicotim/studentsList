import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
})
export class FontSizeDirective {
  constructor(public el: ElementRef, public renderer: Renderer2) {
    this.changeFontSize();
  }

  changeFontSize() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
  }
}
