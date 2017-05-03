import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDayComponent } from './page-day.component';

describe('PageDayComponent', () => {
  let component: PageDayComponent;
  let fixture: ComponentFixture<PageDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
