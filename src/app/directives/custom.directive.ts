import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
   selector: '[appHighlight]'
})
export class HighlightDirective {
   constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
   ngOnInit() { }

   @HostListener('mouseenter') onMouseEnter() {
      this.highlight('#e79dbd');
   }
   @HostListener('mouseleave') onMouseLeave() {
      this.highlight('none');
   }
   private highlight(color: any) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background', color);
   }
}