import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-info',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {
  constructor(private _UsersService: UsersService, private _Router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('uRole') == 'Manager' ) {
      this._UsersService.getAdminData().subscribe({
        next: (response) => {
          console.log(response);

        }
      })
    }else{
      this._Router.navigate(['/notfound'])
    }

  }
}
