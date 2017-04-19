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
var panels_service_1 = require('./../panels.service');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var HomeComponent = (function () {
    function HomeComponent(panelDataService) {
        this.panelDataService = panelDataService;
        this.isPanelDdOpen = false;
        this.isViewDdOpen = false;
        this.isEditDdOpen = false;
        this.isAddDdOpen = false;
        this.dragOperation = true;
        this.viewDropdownlist = ['Home'];
        this.optionsDropdownlist = ['Set as default', 'Reset layout'];
        this.addDropdownlist = ['New Custome View'];
        this.panelDropdownlist = [];
        this.header = "Add Panel";
        this.panelData = [];
        this.viewData = [];
    }
    HomeComponent.prototype.getPanelData = function () {
        var _this = this;
        this.panelDataService.getPanelData().subscribe(function (data) { return _this.panelData = data; });
    };
    HomeComponent.prototype.select = function (item, index) {
        item.checked = !item.checked;
        this.panelData.push(item);
        this.panelDropdownlist.splice(index, 1);
        if (this.panelDropdownlist.length == 0)
            this.isPanelDdOpen = false;
    };
    HomeComponent.prototype.toggleSelect = function () {
        this.isPanelDdOpen = !this.isPanelDdOpen;
    };
    HomeComponent.prototype.selectView = function (view, index) {
        //this.viewData.push(view);
    };
    HomeComponent.prototype.toggleView = function () {
        this.isViewDdOpen = !this.isViewDdOpen;
    };
    HomeComponent.prototype.toggleEdit = function () {
        this.isEditDdOpen = !this.isEditDdOpen;
    };
    HomeComponent.prototype.toggleAdd = function () {
        this.isAddDdOpen = !this.isAddDdOpen;
    };
    HomeComponent.prototype.removePanel = function (index) {
        this.panelDropdownlist.push(new Object(this.panelData.splice(index, 1)[0]));
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getPanelData();
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/home/home.component.html',
            providers: [panels_service_1.PanelDataService],
            styleUrls: ['./app/dndstyle.css', './styles.css']
        }), 
        __metadata('design:paramtypes', [panels_service_1.PanelDataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var Panel = (function () {
    function Panel(id, title, footer, content) {
        this.id = id;
        this.title = title;
        this.footer = footer;
        this.content = content;
    }
    return Panel;
}());
var PanelDropdownlist = (function () {
    function PanelDropdownlist(id, title) {
        this.id = id;
        this.title = title;
    }
    return PanelDropdownlist;
}());
var ViewDropdownlist = (function () {
    function ViewDropdownlist(title) {
        this.title = title;
    }
    return ViewDropdownlist;
}());
//# sourceMappingURL=home.component.js.map