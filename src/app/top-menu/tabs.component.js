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
var tab_component_1 = require('./tab.component');
var TabsComponent = (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(tab_component_1.TabComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tabs',
            template: "\n  <div class=\"menu\">\n    <ul class=\"header\">\n      <li class=\"tab selected\"><a [routerLink]=\"['/home']\">Home</a></li>\n      <li class=\"tab\"><a [routerLink]=\"['/framework']\">Framework</a></li>\n      <li class=\"tab\"><a [routerLink]=\"['/assessments']\">Assessments</a></li>\n      <li class=\"tab\"><a [routerLink]=\"['/businessInterests']\">Business Interests</a></li>\n      <li class=\"tab\"><a [routerLink]=\"['/remediation']\">Remediation</a></li>\n      <li class=\"tab\"><a [routerLink]=\"['/admin']\">Admin</a></li>\n      <li class=\"logout\"><a title=\"Logout\" href=\"#\"><img alt=\"Logout\" src=\"./app/images/exit.gif\" border=\"0\" /></a></li>\n      <li class=\"search\"><a title=\"Search\" href=\"#\"><img alt=\"Search\" src=\"./app/images/view.gif\" border=\"0\" /></a></li>\n      <li><img title=\"Score Sync is not running\" id=\"bulkScoresImage\" src=\"./app/images/ss_not_running.png\" /></li>\n      <li><div id=\"datamartDiv\"><img title=\"Datamart is not running\" id=\"datamartImg\" src=\"./app/images/Database_inactive_16.png\"/> </div></li>\n      <li class=\"user\"><label id=\"currentUserLabel\">Currently logged in as LRM Administrator</label></li>\n    </ul>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map