import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListReportsComponent} from "./reports/list/listreports.component";
import {SubmitReportComponent} from "./reports/submit/submitreport.component";
import {VerifyReport} from "./reports/verify/verifyreport.component";
import {ListMembersComponent} from "./members/list/listmembers.component";

const routes: Routes = [
  { path: 'reports', component: ListReportsComponent},
  { path: 'reports/new', component: SubmitReportComponent},
  { path: 'reports/verify', component: VerifyReport},
  { path: 'members', component: ListMembersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
