import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VichlesService {

  constructor(private _HttpClient: HttpClient) { }
  role: any = localStorage.getItem('uRole')
  id: any = localStorage.getItem('id')
  carId:any=localStorage.getItem('carId')


  // get cars with superadmin role
  getallCars(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/car?_userRole=${this.role}&_userId=${this.id}`)
  }


// get all cars by manager id or admin id
getcarsByMgrOrAdmin(): Observable<any> {
  return this._HttpClient.get(` https://theseventh.azurewebsites.net/api/car/byMgrOrAdmin?_userRole=${this.role}&_userId=${this.id}`)
}
// get all cars by id
getcarsById(): Observable<any> {
  return this._HttpClient.get(` https://theseventh.azurewebsites.net/api/car/byId?_userRole=${this.role}&_userId=${this.id}&id=${this.carId}`)
}


}
