import { Directive, ElementRef, OnInit } from '@angular/core';

/**
 * The directive description ...
 *
 * Usage:
 *
 *    <div ifsRemoveHost></div>
 *
 */
@Directive({
  selector: '[ifsRemoveHost]',
})
export class RemoveHostDirective implements OnInit {

  constructor(
    private el: ElementRef,
  ) {
  }

  // wait for the component to render completely
  public ngOnInit(): void {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const parentElement: HTMLElement = nativeElement.parentElement;

    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }

}
