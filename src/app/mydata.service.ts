import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './shared/model/Data';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  baseUrl : string = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) { }

  getdata(){
   return this._http.get<Iuser[]>(this.baseUrl)
  }
  

}
