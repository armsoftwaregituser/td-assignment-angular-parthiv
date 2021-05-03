import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private contentPath="assets/";

  constructor(private httpClient: HttpClient) { }
  
  fetchData(name:string) :Observable<any> {
      return this.httpClient.get<any>(this.contentPath+name + ".json");    
 }
}
