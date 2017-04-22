webpackJsonp([1,5],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 108;


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(74);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_list_listreports_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_submit_submitreport_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_verify_verifyreport_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__members_list_listmembers_component__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_2__reports_list_listreports_component__["a" /* ListReportsComponent */] },
    { path: 'reports/new', component: __WEBPACK_IMPORTED_MODULE_3__reports_submit_submitreport_component__["a" /* SubmitReportComponent */] },
    { path: 'reports/verify', component: __WEBPACK_IMPORTED_MODULE_4__reports_verify_verifyreport_component__["a" /* VerifyReport */] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_5__members_list_listmembers_component__["a" /* ListMembersComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boundaries_ethereumgateway__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(ethereumGateway) {
        this.ethereumGateway = ethereumGateway;
        try {
            ethereumGateway.connectToContract();
        }
        catch (e) {
            this.error = 'Could not connect to ethereum chain. Please Install MetaMask';
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'blab-verification',
        template: __webpack_require__(182)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__boundaries_ethereumgateway__["a" /* EthereumGateway */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__boundaries_ethereumgateway__["a" /* EthereumGateway */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_submit_submitreport_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_verify_verifyreport_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boundaries_ethereumgateway__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boundaries_reportsgateway__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reports_list_listreports_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_in_memory_web_api__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__in_memory_data_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__boundaries_contract__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__boundaries_hashing__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__members_list_listmembers_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__boundaries_membersgateway__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_hammerjs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__in_memory_data_service__["a" /* InMemoryDataService */]),
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* NoopAnimationsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__reports_submit_submitreport_component__["a" /* SubmitReportComponent */], __WEBPACK_IMPORTED_MODULE_4__reports_verify_verifyreport_component__["a" /* VerifyReport */], __WEBPACK_IMPORTED_MODULE_8__reports_list_listreports_component__["a" /* ListReportsComponent */], __WEBPACK_IMPORTED_MODULE_16__members_list_listmembers_component__["a" /* ListMembersComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__boundaries_ethereumgateway__["a" /* EthereumGateway */], __WEBPACK_IMPORTED_MODULE_13__boundaries_contract__["a" /* Contract */], __WEBPACK_IMPORTED_MODULE_7__boundaries_reportsgateway__["a" /* ReportsGateway */], __WEBPACK_IMPORTED_MODULE_17__boundaries_membersgateway__["a" /* MembersGateway */], __WEBPACK_IMPORTED_MODULE_15__boundaries_hashing__["a" /* Hashing */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var reports = [{
                id: 'hashedreport',
                content: 'report contents',
                submitter: 'Sally the Submitter',
                verifierCount: 3
            }, {
                id: 'reporthash',
                content: 'report content',
                submitter: 'Sven the Submitter',
                verifierCount: 2
            }];
        var members = [{
                id: '0x38588822bea476d5e1d56cfc9ce9781fe5262196',
                name: 'Alice'
            }, {
                id: '0xdf700fd0413ca5772cbf5a588d3080469f2edda2',
                name: 'Bob'
            }, {
                id: '0x354990de9386772900c6b257ec0b8dcc5af8bfba',
                name: 'Carol'
            }, {
                id: '0xa091b68b607622a281d7d0864217ea348957b574',
                name: 'Dave'
            }];
        return { members: members, reports: reports };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = (function () {
    function Report() {
    }
    return Report;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<md-toolbar routerLink=\"/\"\n            style=\"cursor: pointer;\">\n  blockLAB Verify\n</md-toolbar>\n\n<button md-raised-button\n        id=\"navbar-to-submit-report\"\n        routerLink=\"/reports/new\">Submit Report\n</button>\n\n<button md-raised-button\n        id=\"navbar-to-reports\"\n        routerLink=\"/reports\">Reports\n</button>\n\n<button md-raised-button\n        id=\"navbar-verify-report\"\n        routerLink=\"/reports/verify\">Verify Report\n</button>\n\n<button md-raised-button\n        id=\"navbar-to-members\"\n        routerLink=\"/members\">List Members\n</button>\n\n<div id=\"error\">{{ error }}</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<md-list id=\"members-list\">\n  <md-list-item *ngFor=\"let member of members\">\n    <h3 md-line> {{ member.name }} </h3>\n    <p md-line> {{ member.id }} </p>\n  </md-list-item>\n</md-list>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<md-list id=\"reports-list\">\n  <md-list-item *ngFor=\"let report of reports\">\n    <h3 md-line> {{ report.content }} </h3>\n    <i md-line> {{ report.id }} </i>\n    <p md-line class=\"membername\"> {{ report.submitter }} </p>\n    <p md-line> Verifiercount: {{ report.verifierCount }} </p>\n    <button md-mini-fab>\n      <md-icon>check</md-icon>\n    </button>\n  </md-list-item>\n</md-list>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<p></p>\n\n<md-input-container class=\"full-width\">\n  <input id=\"report-content\"\n         mdInput\n         placeholder=\"Describe what you have achieved\"\n         [(ngModel)]=\"report.content\"\n         (ngModelChange)=\"updateReportHash()\">\n</md-input-container>\n\n<md-input-container class=\"full-width\">\n  <input id=\"report-compensation\"\n         mdInput\n         type=\"number\"\n         [(ngModel)]=\"report.compensation\"\n         placeholder=\"What compensation do you expect. e.g. 200\">\n</md-input-container>\n\n<p id=\"report-hashed\"\n   style=\"float: left;\"\n   [hidden]=\"!reportHash\">\n  Your report has the unique hash of <i>{{reportHash}}</i> and will be stored as such\n</p>\n\n<button md-raised-button\n        class=\"pull-right\"\n        color=\"primary\"\n        id=\"submit-report\"\n        [disabled]=\"!report.content\"\n        (click)=\"submitReport()\">\n  Submit Report\n</button>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<p></p>\n\n<md-input-container class=\"full-width\">\n  <input id=\"report-id\"\n         mdInput\n         placeholder=\"Hash of the report\"\n         (keyup)=\"isReportValid()\"\n         [(ngModel)]=\"reportId\">\n</md-input-container>\n\n<button md-raised-button\n        class=\"pull-right\"\n        color=\"primary\"\n        id=\"verify-report\"\n        [disabled]=\"!reportId\"\n        (click)=\"verifyReport()\">\n  Verify Report\n</button>\n\n<div id=\"is-report-valid\">\n  {{ isReportValidText }}\n</div>\n\n<p [hidden]=\"!reportVerifiers\"> The following users have verified the report:</p>\n<md-list id=\"report-verifiers\">\n  <md-list-item *ngFor=\"let verifier of reportVerifiers\">\n    {{ verifier }}\n  </md-list-item>\n</md-list>\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(109);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereumgateway__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contract; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Contract = (function () {
    function Contract(ethereumGateway) {
        this.ethereumGateway = ethereumGateway;
    }
    Contract.prototype.submitReport = function (hash, compensation) {
        return this.submit(hash, compensation);
    };
    Contract.prototype.verifyReport = function (hash) {
        return this.verify(hash);
    };
    Contract.prototype.isReportValid = function (hash) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.ethereumGateway.contract.isValid
                .call(hash, function (err, data) { return resolve(data); });
        });
    };
    Contract.prototype.fetchVerifiers = function (hash) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.ethereumGateway.contract.verifiersFor
                .call(hash, function (err, data) { return resolve(data); });
        });
    };
    Contract.prototype.submit = function (hash, compensation) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.ethereumGateway.contract.submit(hash, compensation, {
                from: _this.ethereumGateway.currentUserAddress()
            }, function () { return resolve(); });
        });
    };
    Contract.prototype.verify = function (hash) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.ethereumGateway.contract.verify(hash, {
                from: _this.ethereumGateway.currentUserAddress()
            }, function () { return resolve(); });
        });
    };
    return Contract;
}());
Contract = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ethereumgateway__["a" /* EthereumGateway */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ethereumgateway__["a" /* EthereumGateway */]) === "function" && _a || Object])
], Contract);

var _a;
//# sourceMappingURL=contract.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthereumGateway; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EthereumGateway = (function () {
    function EthereumGateway() {
    }
    EthereumGateway.prototype.connectToContract = function () {
        this.contract = web3.eth.contract(JSON.parse(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].CONTRACT_ABI)).at(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].CONTRACT_ADDRESS);
    };
    EthereumGateway.prototype.currentUserAddress = function () {
        return web3.eth.coinbase;
    };
    return EthereumGateway;
}());
EthereumGateway = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], EthereumGateway);

//# sourceMappingURL=ethereumgateway.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hashing; });
var Hashing = (function () {
    function Hashing() {
    }
    Hashing.prototype.sha3 = function (toHash) {
        var web3 = new Web3();
        return web3.sha3(toHash);
    };
    return Hashing;
}());

//# sourceMappingURL=hashing.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hashing__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsGateway; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsGateway = (function () {
    function ReportsGateway(http, hashing) {
        this.http = http;
        this.hashing = hashing;
        this.REPORTS_URL = 'toBeDefined/reports'; // URL to web api
        this.HEADERS = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ReportsGateway.prototype.saveReport = function (content, compensation) {
        return this.http.post(this.REPORTS_URL, JSON.stringify({
            id: this.hashing.sha3(content),
            content: content,
            compensation: compensation,
            submitter: 'Carol the current user',
            verifierCount: 0
        }), { headers: this.HEADERS })
            .toPromise()
            .then(function (response) { return response.json().data; });
    };
    ReportsGateway.prototype.reports = function () {
        return this.http.get(this.REPORTS_URL)
            .toPromise()
            .then(function (response) { return response.json().data; });
    };
    return ReportsGateway;
}());
ReportsGateway = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__hashing__["a" /* Hashing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__hashing__["a" /* Hashing */]) === "function" && _b || Object])
], ReportsGateway);

var _a, _b;
//# sourceMappingURL=reportsgateway.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersGateway; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembersGateway = (function () {
    function MembersGateway(http) {
        this.http = http;
        this.MEMBERS_URL = 'toBeDefined/members'; // URL to web api
    }
    MembersGateway.prototype.members = function () {
        return this.http.get(this.MEMBERS_URL)
            .toPromise()
            .then(function (response) { return response.json().data; });
    };
    return MembersGateway;
}());
MembersGateway = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MembersGateway);

var _a;
//# sourceMappingURL=membersgateway.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boundaries_membersgateway__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListMembersComponent = (function () {
    function ListMembersComponent(membersGateway) {
        this.membersGateway = membersGateway;
    }
    ListMembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.membersGateway.members().then(function (members) {
            _this.members = members;
        });
    };
    return ListMembersComponent;
}());
ListMembersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        template: __webpack_require__(183)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__boundaries_membersgateway__["a" /* MembersGateway */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__boundaries_membersgateway__["a" /* MembersGateway */]) === "function" && _a || Object])
], ListMembersComponent);

var _a;
//# sourceMappingURL=listmembers.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boundaries_reportsgateway__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListReportsComponent = (function () {
    function ListReportsComponent(reportsGateway) {
        this.reportsGateway = reportsGateway;
    }
    ListReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportsGateway.reports().then(function (reports) {
            _this.reports = reports;
        });
    };
    return ListReportsComponent;
}());
ListReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        template: __webpack_require__(184)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__boundaries_reportsgateway__["a" /* ReportsGateway */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__boundaries_reportsgateway__["a" /* ReportsGateway */]) === "function" && _a || Object])
], ListReportsComponent);

var _a;
//# sourceMappingURL=listreports.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boundaries_hashing__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boundaries_contract__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boundaries_reportsgateway__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubmitReportComponent = (function () {
    function SubmitReportComponent(router, contract, reportsGateway) {
        this.router = router;
        this.contract = contract;
        this.reportsGateway = reportsGateway;
        this.hashing = new __WEBPACK_IMPORTED_MODULE_1__boundaries_hashing__["a" /* Hashing */]();
        this.report = new __WEBPACK_IMPORTED_MODULE_5__report__["a" /* Report */]();
    }
    SubmitReportComponent.prototype.updateReportHash = function () {
        this.reportHash = this.hashing.sha3(this.report.content);
    };
    SubmitReportComponent.prototype.submitReport = function () {
        var _this = this;
        return this.contract.submitReport(this.reportHash, this.report.compensation).then(function () {
            return _this.reportsGateway.saveReport(_this.report.content, _this.report.compensation).then(function () {
                return _this.router.navigate(['reports']);
            });
        });
    };
    return SubmitReportComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__report__["a" /* Report */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__report__["a" /* Report */]) === "function" && _a || Object)
], SubmitReportComponent.prototype, "report", void 0);
SubmitReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'submit-report',
        template: __webpack_require__(185)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__boundaries_contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__boundaries_contract__["a" /* Contract */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__boundaries_reportsgateway__["a" /* ReportsGateway */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__boundaries_reportsgateway__["a" /* ReportsGateway */]) === "function" && _d || Object])
], SubmitReportComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=submitreport.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boundaries_contract__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyReport; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyReport = (function () {
    function VerifyReport(contract) {
        this.contract = contract;
    }
    VerifyReport.prototype.verifyReport = function () {
        var _this = this;
        this.contract.verifyReport(this.reportId).then(function () {
            _this.contract.fetchVerifiers(_this.reportId).then(function (verifiers) {
                _this.reportVerifiers = verifiers;
            });
        });
    };
    VerifyReport.prototype.isReportValid = function () {
        var _this = this;
        this.contract.isReportValid(this.reportId).then(function (isValid) {
            if (isValid) {
                _this.isReportValidText = 'is valid!';
            }
            else {
                _this.isReportValidText = 'The report you are searching for is not yet valid!';
            }
        });
        this.contract.fetchVerifiers(this.reportId).then(function (verifiers) {
            _this.reportVerifiers = verifiers;
        });
    };
    return VerifyReport;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], VerifyReport.prototype, "reportId", void 0);
VerifyReport = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'verify-report',
        template: __webpack_require__(186)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__boundaries_contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__boundaries_contract__["a" /* Contract */]) === "function" && _a || Object])
], VerifyReport);

var _a;
//# sourceMappingURL=verifyreport.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    CONTRACT_ADDRESS: '0x7C4F731A6fFBdb694585FebA7821Bb8f0966ca32',
    CONTRACT_ABI: '[{"constant":true,"inputs":[{"name":"reportId","type":"string"}],"name":"verifiersFor","outputs":[{"name":"addresses","type":"address[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"membership","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"reportId","type":"string"}],"name":"verify","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"reportId","type":"string"},{"name":"compensation","type":"uint256"}],"name":"submit","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"reportId","type":"string"}],"name":"submitterFor","outputs":[{"name":"submitter","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"reportId","type":"string"}],"name":"isValid","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"membershipManager","type":"address"}],"payable":false,"type":"constructor"}]'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.bundle.js.map