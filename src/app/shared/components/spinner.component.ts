import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ifs-spinner',
  template: `
    <ng-content></ng-content>

    <i class="fa fa-w fa-spin fa-refresh"
       *ngIf="!big"
       [style.display]="show ? 'block' : 'none' "
    ></i>
    
    <i class="fa fa-w fa-spin fa-5x fa-spinner"
       *ngIf="big"
       [style.display]="show ? 'block' : 'none' "
    ></i>
  `,
  styles: [ require('./spinner.component.scss') ],
})
export class SpinnerComponent implements OnInit {
  @Input()
  public show: boolean;

  @Input()
  @HostBinding('class.big')
  public big: boolean = false;

  @Input()
  @HostBinding('style.min-height.px')
  public minHeight: string;

  public constructor(
  ) {
  }

  public ngOnInit() {
  }

}
