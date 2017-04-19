/* tslint:disable:pipe-naming */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * The pipe description ...
 *
 * Usage:
 *   value | cssUrl: 'argument'
 *
 * @example
 *
 *     <div [style.background-image]="imageUrl | cssUrl"></div>
 *
 *     {{ imageUrl | cssUrl: false }}
 *     formats to: "src('...')"
 *
 */
@Pipe({
  name: 'cssUrl',
})
export class CssUrlPipe implements PipeTransform {

  public constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  public transform(url: string, [ isSanitize ] = [ true ]): any {
    if (!url) {
      return null;
    }

    const fullUrl = `url('${url}')`;

    return isSanitize ? this.sanitizer.bypassSecurityTrustStyle(fullUrl) : fullUrl;
  }

}
