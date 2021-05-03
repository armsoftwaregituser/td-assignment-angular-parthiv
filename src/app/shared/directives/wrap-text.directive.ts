import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appWrapText]'
})
export class WrapTextDirective {

  constructor(el: ElementRef, renderer: Renderer) {
      renderer.setElementStyle(el.nativeElement, 'max-width', '200px');
      renderer.setElementStyle(el.nativeElement, 'word-wrap', 'break-word');
   }

}
