import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-dash-assist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dash-assist.component.html',
  styleUrls: ['./dash-assist.component.scss']
})
export class DashAssistComponent  {
  constructor(private _Router:Router){}
  signout():void{
    localStorage.removeItem('uRole');
    localStorage.removeItem('id');
    this._Router.navigate(['/login'])
  }
}
