import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class PanelDataService{
    
    constructor(private http:Http){ }
    getPanelData(){
        return this.http.get('https://api.myjson.com/bins/vmc9r')
                 .map((res:Response) => res.json());
    }
}
