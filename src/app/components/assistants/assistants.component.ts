import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UsersService } from 'src/app/core/services/users.service';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistants',
  standalone: true,
  imports: [CommonModule,NavComponent,SearchPipe,FormsModule],
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.scss']
})
export class AssistantsComponent implements OnInit {
 
  constructor(private _UsersService:UsersService ,private _Router:Router){}
  term:string=''
  assistants:any[]=[]
  assistId:any
  assistInfo(id: any): void {
    this.assistId = id
    localStorage.setItem('assistId', this.assistId)
    // console.log(this.assistId);

    if (localStorage.getItem('uRole') == 'Manager') {
     
      this._Router.navigate(['/assistInfoManager'])

    }
    else if (localStorage.getItem('uRole') == 'Admin') {
      this._Router.navigate(['/assistInfoAdmin'])
    }
  }


  ngOnInit(): void {
    if(localStorage.getItem('uRole')=='SuperAdmin'){
      this._UsersService.getAssists().subscribe({
        next:(response)=>{ 
            console.log(response); 
            this.assistants=response
            console.log(this.assistants);
  
            
        }
      })
     }
  
     else if(localStorage.getItem('uRole')=='Manager'){
      this._UsersService.getAssistsByManagerId().subscribe({
        next:(response)=>{ 
          console.log(response); 
          this.assistants=response
          console.log(this.assistants);

        }
      })
     }
     else if(localStorage.getItem('uRole')=='Admin'){
      this._UsersService.getAssistsByAdminId().subscribe({
        next:(response)=>{ 
          console.log(response); 
          this.assistants=response
          console.log(this.assistants);

        }
      })
     }
  
    else{
      this._Router.navigate(['/notfound'])
    }
  
  }
}
