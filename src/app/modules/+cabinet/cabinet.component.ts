import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-header></app-header>
    <hr>
    <router-outlet></router-outlet>
    <hr>
    <app-footer></app-footer>
  `,
  styleUrls:   [ './cabinet.component.scss' ],
})
export class CabinetComponent implements OnInit {

  public constructor() {
  }

  public ngOnInit() {
  }

}
