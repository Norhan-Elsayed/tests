import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NavHomeComponent } from '../nav-home/nav-home.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavHomeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _Router: Router) { }



  start(): void {
  this._Router.navigate(['/login'])
  }
}
