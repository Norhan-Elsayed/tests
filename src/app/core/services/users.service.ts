import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) { }



  role: any = localStorage.getItem('uRole')
  id: any = localStorage.getItem('id')
  driverId:any=localStorage.getItem('driverId')
  adminId:any=localStorage.getItem('adminId')
  assistId:any=localStorage.getItem('assistId')
  managerId:any=localStorage.getItem('managerId')

  // get super admin data
  getsuperdata(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/superAdmin?_userRole=${this.role}&_userId=${this.id}`)
  }

  // get all managers
  getManagers(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/manager?_userRole=${this.role}&_userId=${this.id}`)
  }
   // get manager by id
   getManagerByid(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/manger?id=${this.managerId}&_userRole=${this.role}&_userId=${this.id}`)
  }
  // ////////////////////////////مش شغاله

  // get all admins by superadmin role
  getAdmins(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/admin?_userRole=${this.role}&_userId=${this.id}`)
  }

  // get all admins by manager id
  getAdminsByManagerId(): Observable<any> {
    return this._HttpClient.get(` https://theseventh.azurewebsites.net/api/admin/byMangerId?_userRole=Manager&_userId=${this.id}&id=${this.id}`)
  }

  // get admin data role manager
  getAdminData(): Observable<any> {
    return this._HttpClient.get(` https://theseventh.azurewebsites.net/api/admin/getAdminById?_userRole=${this.role}&_userId=${this.id}&id=${this.adminId}`)
  }
  
  // get all assistants by superadmin role
  getAssists(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/assistant?_userRole=${this.role}&_userId=${this.id}`)
  }

  //get all assistants by manager id
  getAssistsByManagerId(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/assistant/byMangerId?_userRole=${this.role}&_userId=${this.id}&id=${this.id}`)
  }

  //get all assistants by admin id
  getAssistsByAdminId(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/assistant/byAdminId?_userRole=${this.role}&_userId=${this.id}&id=${this.id}`)
  }

  // get assistant info by id
  getAssistsById(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/assistant/getAssistantById?_userRole=${this.role}&_userId=${this.id}&id=${this.assistId}`)
  }

  // get all drivers superadmin role
  getDrivers(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/driver?_userRole=${this.role}&_userId=${this.id}`)
  }
  // get drivers by manager id
  getdriversByManagerId(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/driver/byMgr?_userRole=${this.role}&_userId=${this.id}`)
  }
  // get drivers by admin id
  getdriversByAdminId(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/driver/byadmin?_userRole=${this.role}&_userId=${this.id}`)
  }
  // get drivers by assistant id
  getdriversByAssistId(): Observable<any> {
    return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/driver/byAss?_userRole=${this.role}&_userId=${this.id}&id=${this.id}`)
  }
    // get driver by id
    getdriverById(): Observable<any> {
      return this._HttpClient.get(`https://theseventh.azurewebsites.net/api/driver/byId?_userRole=${this.role}&_userId=${this.id}&id=${this.driverId}`)
    }









}



