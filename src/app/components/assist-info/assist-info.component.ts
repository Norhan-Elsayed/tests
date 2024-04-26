import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-assist-info',
  standalone: true,
  imports: [CommonModule,NavComponent],
  templateUrl: './assist-info.component.html',
  styleUrls: ['./assist-info.component.scss']
})
export class AssistInfoComponent  implements OnInit{
  constructor(private _UsersService: UsersService, private _Router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('uRole') == 'Manager' || localStorage.getItem('uRole') == 'Admin' ) {
      this._UsersService.getAssistsById().subscribe({
        next: (response) => {
          console.log(response);

        }
      })
    }else{
      this._Router.navigate(['/notfound'])
    }

  }
}
