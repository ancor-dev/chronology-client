import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-img-cover',
  template: ``,
  styles:   [ `
    :host {
        display: block;
        height: 100%;
        background-size: cover;
        background-position: center;
    }
  ` ],
})
export class ImgCoverComponent implements OnInit {
  @Input()
  public src: string;

  @HostBinding('style.background-image')
  public get url(): any {
    return this.src ? this.sanitizer.bypassSecurityTrustStyle(`url('${this.src}')`) : null;
  }

  public constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  public ngOnInit() {
  }

}
