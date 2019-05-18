import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollNav]'
})
export class ScrollNavDirective {

  private class: string = 'navbar-shrink';

  constructor(private _el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (event.pageY >= 54 && !this._el.nativeElement.classList.contains(this.class)) {
      this._el.nativeElement.classList.add(this.class);
    }
    else if (event.pageY < 54 && this._el.nativeElement.classList.contains(this.class)) {
      this._el.nativeElement.classList.remove(this.class);
    }
  }

}
