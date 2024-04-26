import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UsersService } from 'src/app/core/services/users.service';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers',
  standalone: true,
  imports: [CommonModule,NavComponent,SearchPipe,FormsModule],
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {
  constructor(private _UsersService:UsersService ,private _Router:Router){}
  managerid!:any
  managerInfo(id:any): void {
    this.managerid=id
      localStorage.setItem('managerId',this.managerid)

    // console.log(this.managerid);
    
    if (localStorage.getItem('uRole') == 'SuperAdmin') {
      // this.driverId=id
      // localStorage.setItem('driverId',this.driverId)
      this._Router.navigate(['/managerInfoSuper'])
     
    }
    
  }
  managers:any[]=[]
  term:string=''
  ngOnInit(): void {
    this._UsersService.getManagers().subscribe({
      next:(response)=>{
        console.log(response);
        this.managers=response
        
      }
    })
  }
}
