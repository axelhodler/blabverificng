import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SubmitReportComponent} from "./reports/submit/submitreport.component";
import {VerifyReport} from "./reports/verify/verifyreport.component";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {AppComponent} from "./app.component";
import {ReportsGateway} from "./boundaries/reportsgateway";
import {ListReportsComponent} from "./reports/list/listreports.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {VerificationContract} from "./boundaries/verification_contract";
import {MaterialModule} from "@angular/material";
import {Hashing} from "./boundaries/hashing";
import {ListMembersComponent} from "./members/list/listmembers.component";
import {MembersGateway} from "./boundaries/membersgateway";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';

@NgModule({
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    NoopAnimationsModule
  ],
  declarations: [AppComponent, SubmitReportComponent, VerifyReport, ListReportsComponent, ListMembersComponent],
  bootstrap: [AppComponent],
  providers: [EthereumGateway, VerificationContract, ReportsGateway, MembersGateway, Hashing]
})
export class AppModule {
}
