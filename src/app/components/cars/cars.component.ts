import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { VichlesService } from 'src/app/core/services/vichles.service';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, NavComponent, FormsModule, SearchPipe],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  constructor(private _VichlesService: VichlesService, private _Router: Router) { }
  cars: any[] = []
  term: string = ''
  carId!:any

  carInfo(id: any): void {
    this.carId = id
    // localStorage.setItem('carId', this.carId)
    localStorage.setItem('carId',this.carId)
    console.log(this.carId);

    if (localStorage.getItem('uRole') == 'Manager') {
      
      this._Router.navigate(['/carInfoManager'])

    }
    else if (localStorage.getItem('uRole') == 'Admin') {
      this._Router.navigate(['/carInfoAdmin'])
    }}


  ngOnInit(): void {
    if (localStorage.getItem('uRole') == 'SuperAdmin') {
      this._VichlesService.getallCars().subscribe({
        next: (response) => {
          console.log(response);
          this.cars = response
        }
      })
    } else if (localStorage.getItem('uRole') == 'Manager'||localStorage.getItem('uRole') == 'Admin') {
      this._VichlesService.getcarsByMgrOrAdmin().subscribe({
        next: (response) => {
          console.log(response);
          this.cars = response



        }
      })
    }
  }
}

