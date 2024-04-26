import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manager-layout',
  standalone: true,
  imports: [CommonModule,NavComponent,RouterOutlet],
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.scss']
})
export class ManagerLayoutComponent implements OnInit {
  constructor(private _Router:Router){}
  role=localStorage.getItem('uRole');
  ngOnInit(): void {
    if(this.role!=='Manager'){
      this._Router.navigate(['/notfound'])
    }
  }
}
