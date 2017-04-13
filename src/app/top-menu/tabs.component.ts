import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  template:`
  <div class="menu">
    <ul class="header">
      <li class="tab selected"><a [routerLink]="['/home']">Home</a></li>
      <li class="tab"><a [routerLink]="['/framework']">Framework</a></li>
      <li class="tab"><a [routerLink]="['/assessments']">Assessments</a></li>
      <li class="tab"><a [routerLink]="['/businessInterests']">Business Interests</a></li>
      <li class="tab"><a [routerLink]="['/remediation']">Remediation</a></li>
      <li class="tab"><a [routerLink]="['/admin']">Admin</a></li>
      <li class="logout"><a title="Logout" href="#"><img alt="Logout" src="./app/images/exit.gif" border="0" /></a></li>
      <li class="search"><a title="Search" href="#"><img alt="Search" src="./app/images/view.gif" border="0" /></a></li>
      <li><img title="Score Sync is not running" id="bulkScoresImage" src="./app/images/ss_not_running.png" /></li>
      <li><div id="datamartDiv"><img title="Datamart is not running" id="datamartImg" src="./app/images/Database_inactive_16.png"/> </div></li>
      <li class="user"><label id="currentUserLabel">Currently logged in as LRM Administrator</label></li>
    </ul>
    <div>
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class TabsComponent implements AfterContentInit {
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab: TabComponent){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
