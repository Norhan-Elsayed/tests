import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dash-manager',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dash-manager.component.html',
  styleUrls: ['./dash-manager.component.scss']
})
export class DashManagerComponent {
  constructor(private _Router:Router){}
  signout():void{
    localStorage.removeItem('uRole');
    localStorage.removeItem('id');
    this._Router.navigate(['/login'])
  }

}
