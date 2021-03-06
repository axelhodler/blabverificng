import {SubmitReportComponent} from "./reports/submit/submitreport.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {VerifyReport} from "./reports/verify/verifyreport.component";
import {FormsModule} from "@angular/forms";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {VerificationContract} from "./boundaries/verification_contract";
import {By} from "@angular/platform-browser";
import {ReportsGateway} from "./boundaries/reportsgateway";
import {ListReportsComponent} from "./reports/list/listreports.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {ListMembersComponent} from "./members/list/listmembers.component";
import 'hammerjs';

describe('AppComponent', () =>{
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let ethereumGatewaySpy: EthereumGateway;

  ethereumGatewaySpy = <EthereumGateway>{
    connectToContract() {
    }
  };

  beforeEach(async(() => {
    spyOn(ethereumGatewaySpy, 'connectToContract').and.throwError('');
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, AppRoutingModule, RouterTestingModule, MaterialModule],
      declarations: [AppComponent, SubmitReportComponent, VerifyReport, ListReportsComponent, ListMembersComponent],
      providers: [{provide: EthereumGateway, useValue: ethereumGatewaySpy}, VerificationContract, ReportsGateway]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('tells the user to install MetaMask on fail', () => {
    expect(fixture.debugElement.query(By.css('#error')).nativeElement.textContent).toContain('Please Install MetaMask');
  });
});
