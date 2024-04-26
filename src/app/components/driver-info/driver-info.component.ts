import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';
import { DriversComponent } from '../drivers/drivers.component';

@Component({
  selector: 'app-driver-info',
  standalone: true,
  imports: [CommonModule,NavComponent],
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.scss']
})
export class DriverInfoComponent implements OnInit {

 constructor(private _UsersService:UsersService , private _Router:Router){}
data:any[]=[]

  ngOnInit(): void {
    
    if (localStorage.getItem('uRole') == 'Manager' || localStorage.getItem('uRole') == 'Admin' || localStorage.getItem('uRole') == 'Assistant') {

      this._UsersService.getdriverById().subscribe({
        next: (response) => {
          this.data.push(response)
          console.log(this.data);

        }
      })
    }else{
      this._Router.navigate(['/notfound'])
    }
  }


}
