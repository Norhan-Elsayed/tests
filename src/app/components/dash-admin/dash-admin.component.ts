import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-dash-admin',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.scss']
})
export class DashAdminComponent  {
  constructor(private _Router:Router){}
  signout():void{
    localStorage.removeItem('uRole');
    localStorage.removeItem('id');
    this._Router.navigate(['/login'])
  }
}
