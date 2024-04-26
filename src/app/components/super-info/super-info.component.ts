import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UsersService } from 'src/app/core/services/users.service';


@Component({
  selector: 'app-super-info',
  standalone: true,
  imports: [CommonModule,NavComponent],
  templateUrl: './super-info.component.html',
  styleUrls: ['./super-info.component.scss']
})
export class SuperInfoComponent implements OnInit {
  data:any[]=[]
  constructor(private _UsersService:UsersService){}
  ngOnInit(): void {
   
    this._UsersService.getsuperdata().subscribe({
      next:(response)=>{ 
        this.data=response
          console.log(this.data); 
      }
    })
  }
}
