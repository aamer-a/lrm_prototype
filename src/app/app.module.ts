import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './top-menu/tabs.component';
import { TabComponent } from './top-menu/tab.component';

import { HomeComponent } from './home/home.component';
import { FrameworkComponent } from './framework/framework.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { BusinessInterestsComponent } from './businessinterests/businessinterests.component';
import { RemediationComponent } from './remediation/remediation.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'framework', component: FrameworkComponent },
  { path: 'assessments', component: AssessmentsComponent },
  { path: 'businessInterests', component: BusinessInterestsComponent },
  { path: 'remediation', component: RemediationComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'home', pathMatch:'full'}

];

@NgModule({
  imports: [ BrowserModule, DndModule.forRoot(), FormsModule,  HttpModule, JsonpModule, 
  RouterModule.forRoot(appRoutes)],
  exports: [BrowserModule, DndModule],
  declarations: [ AppComponent, TabsComponent, TabComponent, FrameworkComponent, BusinessInterestsComponent, AdminComponent, AssessmentsComponent, RemediationComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }