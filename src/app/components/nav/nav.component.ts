import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
constructor( private _Router:Router){}

  signout():void{
    localStorage.removeItem('uRole');
    localStorage.removeItem('id');
    localStorage.removeItem('driverId');
    localStorage.removeItem('managerId');
    // localStorage.removeItem('id');
    this._Router.navigate(['/login'])
  }

}
