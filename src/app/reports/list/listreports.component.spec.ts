import {ListReportsComponent} from "./listreports.component";
import {async, ComponentFixture, fakeAsync, TestBed} from "@angular/core/testing";
import {ListReportsPageObject} from "./listreports.component.pageobject";
import {ReportsGateway} from "../../boundaries/reportsgateway";
import {MockReportsGateway} from "../../testdoubles/mockreportsgateway";
import {MaterialModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {RouterTestingModule} from "@angular/router/testing";

describe('ListReportsComponent', () => {
  let comp: ListReportsComponent;
  let fixture: ComponentFixture<ListReportsComponent>;
  let pageObject: ListReportsPageObject;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule, RouterTestingModule],
      declarations: [ListReportsComponent],
      providers: [{provide: ReportsGateway, useClass: MockReportsGateway}]
    })
      .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(ListReportsComponent);
    pageObject = new ListReportsPageObject(fixture);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('displays the reporters name', () => {
    const report = 'hashedreport report contents Sally the Submitter';
    const reportsList = pageObject.reportsList();

    const rows = reportsList.firstElementChild.getElementsByClassName('membername');

    expect(rows[0].textContent).toContain('Sally the Submitter');
  });
});
