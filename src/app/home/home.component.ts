import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PanelDataService } from './../panels.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    templateUrl:'./app/home/home.component.html',
    providers: [PanelDataService],
    styleUrls: ['./app/dndstyle.css', './styles.css']
})
export class HomeComponent implements OnInit {

  isPanelDdOpen: boolean = false;
  isViewDdOpen: boolean = false;
  isEditDdOpen: boolean = false;
  dragOperation: boolean = true;
  viewDropdownlist = ['Home'];
  optionsDropdownlist = ['Set as default', 'Reset layout'];
  panelDropdownlist: Array<any> = [];
  header: string = "Add Panel";

  constructor(private panelDataService: PanelDataService) {}
  
  panelData:any = [];
  viewData: any = [];
    
  getPanelData() {
    this.panelDataService.getPanelData().subscribe(data => this.panelData = data);
  }
   
  select(item: any, index: number) {
    item.checked = !item.checked;
    this.panelData.push(item);
    this.panelDropdownlist.splice(index, 1);
    if(this.panelDropdownlist.length == 0)
      this.isPanelDdOpen = false;
  }
  
  toggleSelect() {
    this.isPanelDdOpen = !this.isPanelDdOpen;
  }

  selectView(view: any, index: number){
   //this.viewData.push(view);
  }

  toggleView(){
    this.isViewDdOpen = !this.isViewDdOpen;
  }

  toggleEdit(){
    this.isEditDdOpen = !this.isEditDdOpen;
  }

  removePanel(index: number): void {
    this.panelDropdownlist.push(new Object(this.panelData.splice(index, 1)[0]));
	}

  ngOnInit(){
    this.getPanelData();
  }
}

class Panel {
  constructor(
    public id: number, 
    public title: string, 
    public footer: string, 
    public content: any) {}
}

class PanelDropdownlist {
  constructor(public id: number, 
    public title: string) {} 
}
class ViewDropdownlist{
  constructor(
  public title: string){}
}


