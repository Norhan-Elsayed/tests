import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { VichlesService } from 'src/app/core/services/vichles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-info',
  standalone: true,
  imports: [CommonModule,NavComponent],
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  constructor(private _VichlesService: VichlesService, private _Router: Router) { }

ngOnInit(): void {
  if (localStorage.getItem('uRole') == 'Manager' || localStorage.getItem('uRole') == 'Admin' ) {
    this._VichlesService.getcarsById().subscribe({
      next: (response) => {
        console.log(response);

      }
    })
  }else{
    this._Router.navigate(['/notfound'])
  }

}
}
