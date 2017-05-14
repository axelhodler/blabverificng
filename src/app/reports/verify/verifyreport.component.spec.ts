import {
  async, TestBed, ComponentFixture, fakeAsync, tick
} from '@angular/core/testing';
import {VerifyReport} from "./verifyreport.component";
import {VerificationContract} from "../../boundaries/verification_contract";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {VerifyReportComponentPageObject} from "./verifyreport.component.pageobject";
import {MaterialModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';
import {ActivatedRoute} from "@angular/router";

let comp: VerifyReport;
let pageObject: VerifyReportComponentPageObject;
let fixture: ComponentFixture<VerifyReport>;
let contractMock = {
  verifyReport() {
  },
  isReportValid() {
    return Promise.resolve();
  },
  fetchVerifiers() {
    return Promise.resolve();
  }
};

describe('VerifyReport', () => {

  let activatedRouteStub = {
    snapshot: {
      params: {}
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
      declarations: [VerifyReport],
      providers: [{provide: VerificationContract, useValue: contractMock}, {provide: ActivatedRoute, useValue: activatedRouteStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyReport);
    pageObject = new VerifyReportComponentPageObject(fixture);
    comp = fixture.componentInstance;
    contractMock = TestBed.get(VerificationContract);
    spyOn(contractMock, 'verifyReport').and.returnValue(Promise.resolve());
    fixture.detectChanges();
  });

  it('verifies a report on clicking the verify report button', () => {
    pageObject.enterReportId('reportId', () => {
    });

    fixture.debugElement.query(By.css('#verify-report')).nativeElement.click();

    expect(contractMock.verifyReport).toHaveBeenCalledWith('reportId');
  });

  it('can find reports by id', () => {
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve());

    pageObject.enterReportId('reportId', () => {
    });

    expect(contractMock.isReportValid).toHaveBeenCalledWith('reportId');
  });

  it('displays if checked report is valid', fakeAsync(() => {
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve(true));

    pageObject.enterReportId('reportId', tick);

    expect(pageObject.isReportValidTextContent()).toBe('is valid!');
  }));

  it('displays if checked report is invalid', fakeAsync(() => {
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve(false));

    pageObject.enterReportId('reportId', tick);

    expect(pageObject.isReportValidTextContent()).toContain('not yet valid');
  }));

  it('does not allow to click verify-report if no id is entered', () => {
    expect(fixture.debugElement.query(By.css('#verify-report')).nativeElement.getAttribute('disabled')).toBe('');
  });

  it('displays the verifiers for a specified report', fakeAsync(() => {
    spyOn(contractMock, 'fetchVerifiers').and.returnValue(Promise.resolve(['firstAddress']));

    pageObject.enterReportId('reportId', tick);

    expect(pageObject.reportsVerifierTextContent()).toContain('firstAddress');
  }));

  it('updates the verifiers after adding a new verification', fakeAsync(() => {
    spyOn(contractMock, 'fetchVerifiers')
      .and.returnValues(Promise.resolve(['firstAddress']), Promise.resolve(['firstAddress', 'secondAddress']));
    pageObject.enterReportId('reportId', tick);

    pageObject.clickVerifyButton(tick);

    expect(pageObject.reportsVerifierTextContent()).toContain('firstAddress');
    expect(pageObject.reportsVerifierTextContent()).toContain('secondAddress');
  }));
});

describe('VerifyReport - entered with reportid already provided', () => {
  let activeRouteStub = {
    snapshot: {
      params: {
        reportid: 'someReportId'
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
      declarations: [VerifyReport],
      providers: [{provide: VerificationContract, useValue: contractMock}, {provide: ActivatedRoute, useValue: activeRouteStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyReport);
    pageObject = new VerifyReportComponentPageObject(fixture);
    comp = fixture.componentInstance;
    contractMock = TestBed.get(VerificationContract);
  });

  it('fetches report if provided via route params', fakeAsync(() => {
    spyOn(contractMock, 'verifyReport').and.returnValue(Promise.resolve());
    spyOn(contractMock, 'fetchVerifiers').and.returnValue(Promise.resolve());
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve());

    fixture.detectChanges();
    tick();

    expect(pageObject.reportIdValue()).toBe('someReportId');
    expect(contractMock.fetchVerifiers).toHaveBeenCalledWith('someReportId');
    expect(contractMock.isReportValid).toHaveBeenCalledWith('someReportId');
  }));
});
