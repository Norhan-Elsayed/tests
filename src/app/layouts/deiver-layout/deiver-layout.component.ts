import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-deiver-layout',
  standalone: true,
  imports: [CommonModule,NavComponent,RouterOutlet],
  templateUrl: './deiver-layout.component.html',
  styleUrls: ['./deiver-layout.component.scss']
})
export class DeiverLayoutComponent implements OnInit {
  constructor(private _Router:Router){}
  role=localStorage.getItem('uRole');
  ngOnInit(): void {
    if(this.role!=='Driver'){
      this._Router.navigate(['/notfound'])
    }
  }
}
