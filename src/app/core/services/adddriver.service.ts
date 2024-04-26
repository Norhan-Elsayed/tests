// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// interface ImageData {
//   type: string;
//   Img: File;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AdddriverService {

//   constructor(private _HttpClient:HttpClient) { }

  // registers(adding:any):Observable<any> {
  //   return this._HttpClient.post('https://theseventh.azurewebsites.net/api/Violation',adding)
  //   // return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  // }

  // registers(formData){
  //   return this._HttpClient.post('https://theseventh.azurewebsites.net/api/Violation',formData)
  // }

// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdddriverService {

//   constructor(private http: HttpClient) { }

//   role: any = localStorage.getItem('uRole')
//   id: any = localStorage.getItem('id')

//   addAssis(formData: FormData) {
//     return this.http.post(`https://theseventh.azurewebsites.net/api/Assistant?&_userRole=${this.role}&_userId=${this.id}`, formData);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdddriverService {

  constructor(private http: HttpClient) { }

  role: any = localStorage.getItem('uRole');
  id: any = localStorage.getItem('id');

  addAssis(formData: FormData) {
    // Create headers with content type for form-data
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    // Append query parameters to the URL
    const url = `https://theseventh.azurewebsites.net/api/Assistant?&_userRole=${this.role}&_userId=${this.id}`;

    // Send POST request with form-data and headers
    return this.http.post(url, formData, { headers });
  }
}
