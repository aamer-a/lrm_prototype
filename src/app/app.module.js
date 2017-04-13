"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_dnd_1 = require('ng2-dnd');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var tabs_component_1 = require('./top-menu/tabs.component');
var tab_component_1 = require('./top-menu/tab.component');
var home_component_1 = require('./home/home.component');
var framework_component_1 = require('./framework/framework.component');
var assessments_component_1 = require('./assessments/assessments.component');
var businessinterests_component_1 = require('./businessinterests/businessinterests.component');
var remediation_component_1 = require('./remediation/remediation.component');
var admin_component_1 = require('./admin/admin.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'framework', component: framework_component_1.FrameworkComponent },
    { path: 'assessments', component: assessments_component_1.AssessmentsComponent },
    { path: 'businessInterests', component: businessinterests_component_1.BusinessInterestsComponent },
    { path: 'remediation', component: remediation_component_1.RemediationComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_dnd_1.DndModule.forRoot(), forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule,
                router_1.RouterModule.forRoot(appRoutes)],
            exports: [platform_browser_1.BrowserModule, ng2_dnd_1.DndModule],
            declarations: [app_component_1.AppComponent, tabs_component_1.TabsComponent, tab_component_1.TabComponent, framework_component_1.FrameworkComponent, businessinterests_component_1.BusinessInterestsComponent, admin_component_1.AdminComponent, assessments_component_1.AssessmentsComponent, remediation_component_1.RemediationComponent, home_component_1.HomeComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map