import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assist-layout',
  standalone: true,
  imports: [CommonModule,NavComponent,RouterOutlet],
  templateUrl: './assist-layout.component.html',
  styleUrls: ['./assist-layout.component.scss']
})
export class AssistLayoutComponent implements OnInit {
  constructor(private _Router:Router){}
  role=localStorage.getItem('uRole');
  ngOnInit(): void {
    if(this.role!=='Assistant'){
      this._Router.navigate(['/notfound'])
    }
  }
}
