import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Busroute } from "../model/busroute";
import { of } from 'rxjs';
import { data } from "./bus-services-data";

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  myAppUrl: string = environment.apiUrl;     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'       
    })
  };

  constructor(private http: HttpClient) {
  }

  saveBusroute(data: Busroute[]): Observable<any> {     
    let response=true;      
    return of(response);
  }
 
  getBusrouteList(): Observable<any> {
    debugger;
    console.log("data");
     return of(data);
  }

}
