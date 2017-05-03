import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './page-day.component.html',
  styleUrls:   [ './page-day.component.scss' ],
})
export class PageDayComponent implements OnInit {

  public date: string;

  public constructor(
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.route.params
        .map((params: object) => params[ 'date' ])
        .subscribe((date) => this.date = date)
    ;
  }

}
