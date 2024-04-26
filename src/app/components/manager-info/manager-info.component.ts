import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-info',
  standalone: true,
  imports: [CommonModule,NavComponent],
  templateUrl: './manager-info.component.html',
  styleUrls: ['./manager-info.component.scss']
})
export class ManagerInfoComponent implements OnInit {
  constructor(private _UsersService:UsersService ,private _Router:Router){}


  ngOnInit(): void {
    
    if (localStorage.getItem('uRole') == 'SuperAdmin' ) {
      this._UsersService.getManagerByid().subscribe({
        next: (response) => {
          console.log(response);

        }
      })
    }else{
      this._Router.navigate(['/notfound'])
    }
  }

}
