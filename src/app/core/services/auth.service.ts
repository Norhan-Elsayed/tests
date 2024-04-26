import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  baseUrl:string=`https://theseventh.azurewebsites.net/api/`;


  login(userData:object):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl +'user',userData)
  }
}
