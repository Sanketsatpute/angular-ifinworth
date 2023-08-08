import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IFINWORTH, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IfinworthService {

  constructor(private http:HttpClient) { }

  getBigMacIndex(): Observable<any>{
    return this.http.get<Observer<any>>(IFINWORTH.BIGMACINDEX);
  }

  filterGetBigMacIndex(date:string): Observable<any>{
    return this.http.get<Observer<any>>(IFINWORTH.BIGMACINDEX + `/${date}`);
  }

  getWorldIndexData(): Observable<any>{
    return this.http.get<Observer<any>>(IFINWORTH.WORLDINDEXDATA);
  }

  filterGetWorldIndex(seriesId:string,countryCode:string): Observable<any>{
    return this.http.get<Observer<any>>(IFINWORTH.WORLDINDEXDATA + `/${countryCode}/${seriesId}`); 
  }
}
