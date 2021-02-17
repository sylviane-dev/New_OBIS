import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Location} from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { Tableau1Service } from './employeur/tableau1.service';
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class DimensionsService {


  constructor(private http:HttpClient, 
    private router:Router,
    private location :Location,
    private tableau1Service: Tableau1Service) { }
   

  querybrancheList() : Observable<any>{
    var rqHeader= new  HttpHeaders(this.tableau1Service.requestHeader)
    return this.http.get(LayoutComponent.RESOURCE_SERVER_URL+'brancheList/',{headers:rqHeader})
  }
  queryCategorieList() : Observable<any>{
    var rqHeader= new  HttpHeaders(this.tableau1Service.requestHeader)
    return this.http.get(LayoutComponent.RESOURCE_SERVER_URL+'categorieList/',{headers:rqHeader})
  }
}
