import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UsersService } from 'src/app/core/services/users.service';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule, NavComponent, SearchPipe, FormsModule, RouterLink],
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  constructor(private _UsersService: UsersService, private _Router: Router) { }
  drivers: any[] = []
  term: string = ''
  driverId: any = ''



  // navigate to driver information
  driverInfo(id: any): void {
    this.driverId = id
    localStorage.setItem('driverId', this.driverId)
    console.log(this.driverId);

    if (localStorage.getItem('uRole') == 'Manager') {
      // this.driverId=id
      // localStorage.setItem('driverId',this.driverId)
      this._Router.navigate(['/driverInfoManager'])

    }
    else if (localStorage.getItem('uRole') == 'Admin') {
      this._Router.navigate(['/driverInfoAdmin'])
    }
    else if (localStorage.getItem('uRole') == 'Assistant') {
      this._Router.navigate(['/driverInfoAssist'])
    }
  }




  ngOnInit(): void {


    if (localStorage.getItem('uRole') == 'SuperAdmin') {
      this._UsersService.getDrivers().subscribe({
        next: (response) => {
          console.log(response);
          this.drivers = response
          console.log(this.drivers);

        }
      })
    }
    else if (localStorage.getItem('uRole') == 'Manager') {
      this._UsersService.getdriversByManagerId().subscribe({
        next: (response) => {
          console.log(this.driverId);
          console.log(response);
          this.drivers = response
          console.log(this.drivers);
        }
      })
    }
    else if (localStorage.getItem('uRole') == 'Admin') {
      this._UsersService.getdriversByAdminId().subscribe({
        next: (response) => {
          console.log(response);
          this.drivers = response
          console.log(this.drivers);
        }
      })
    }
    else if (localStorage.getItem('uRole') == 'Assistant') {
      this._UsersService.getdriversByAssistId().subscribe({
        next: (response) => {
          console.log(response);
          this.drivers = response
          console.log(this.drivers);
        }
      })
    }





  }

}
