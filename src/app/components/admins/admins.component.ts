import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UsersService } from 'src/app/core/services/users.service';
import { Route, Router } from '@angular/router';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [CommonModule,NavComponent,SearchPipe,FormsModule],
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  constructor(private _UsersService:UsersService , private _Router:Router){}
  admins:any[]=[]
  userID:any
  term:string=''
adminId:any

  adminInfo(id: any): void {
    this.adminId = id
    localStorage.setItem('adminId', this.adminId)
    console.log(this.adminId);

    if (localStorage.getItem('uRole') == 'Manager') {
      // this.driverId=id
      // localStorage.setItem('driverId',this.driverId)
      this._Router.navigate(['/adminInfoManager'])
    }}
ngOnInit(): void {
 

  if(localStorage.getItem('uRole')=='SuperAdmin'){
    this._UsersService.getAdmins().subscribe({
      next:(response)=>{ 
          console.log(response); 
          this.admins=response
          console.log(this.admins);

          
      }
    })
   }

   else if(localStorage.getItem('uRole')=='Manager'){
    this._UsersService.getAdminsByManagerId().subscribe({
      next:(response)=>{ 
          console.log(response); 
          this.admins=response
          console.log(this.admins);
      }
    })
   }

  else{
    this._Router.navigate(['/notfound'])
  }


}
}
