import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.scss' ],
})
export class LoginComponent implements OnInit {
  /** 10px is the missing margin of the missing box */
  public calc2Cols = '2 2 calc(10em + 10px);';
  /** 20px is the missing margin of the two missing boxes */
  public calc3Cols = '3 3 calc(15em + 20px)';

  public constructor() {
  }

  public ngOnInit() {
  }

}
