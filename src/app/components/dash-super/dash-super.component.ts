import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-dash-super',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './dash-super.component.html',
  styleUrls: ['./dash-super.component.scss']
})
export class DashSuperComponent {
  constructor(private _Router:Router){}
  signout():void{
    localStorage.removeItem('uRole');
    localStorage.removeItem('id');
    this._Router.navigate(['/login'])
  }

}
