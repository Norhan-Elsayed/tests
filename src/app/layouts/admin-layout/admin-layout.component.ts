import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  constructor(private _Router:Router){}
  role=localStorage.getItem('uRole');
  ngOnInit(): void {
    if(this.role!=='Admin'){
      this._Router.navigate(['/notfound'])
    }
  }
}
