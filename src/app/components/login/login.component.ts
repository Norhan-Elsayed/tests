import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormControlName, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _Router:Router , private  _FormBuilder:FormBuilder,private _AuthService:AuthService){}
 errMsg:string= "";
 isLoading:boolean =false;
 // using formBuilder

 loginForm:FormGroup = this._FormBuilder.group(
   {
   email:['',[Validators.required, Validators.email] ],
   password:['',[Validators.required , Validators.pattern(/^[a-zA-Z0-9_@]{4,}$/)]]
 })

 handleForm():void{
   const userData = this.loginForm.value;
   this.isLoading = true;
   if(this.loginForm.valid === true) {
    //  this.cookie.set("UserDetails","email:-"+this.loginForm.value.email+"password:-"+this.loginForm.value.password)
     // this.cookie.set("ARRAffinitySameSite",this.cookie.get('CookieValue'))
   this._AuthService.login(userData).subscribe({
     next: (response)=>{
       console.log(response)
   
       if(response.message == 'Super authentication successful.'){
        localStorage.setItem('uRole', response.role)
        localStorage.setItem('id', response.user.id)
        this.isLoading = false;
         this._Router.navigate(['/dashSuper'])
       }
      else if(response.message == 'Manager authentication successful.'){
        localStorage.setItem('uRole', response.role)
        localStorage.setItem('id', response.user.id)
        this.isLoading = false;
         this._Router.navigate(['/dashManager'])
       }
       else if(response.message == 'Assistant authentication successful.'){
        localStorage.setItem('uRole', response.role)
        localStorage.setItem('id', response.user.id)
        this.isLoading = false;
         this._Router.navigate(['/dashAssist'])
       }
       else if(response.message == 'Admin authentication successful.'){
        localStorage.setItem('uRole', response.role)
        localStorage.setItem('id', response.user.id)
        this.isLoading = false;
         this._Router.navigate(['/dashAdmin'])
       }
       else if(response.message == 'Driver authentication successful.'){
        localStorage.setItem('uRole', response.role)
        localStorage.setItem('id', response.user.id)
        this.isLoading = false;
         this._Router.navigate(['/driverInfoDriver'])
       }
     },
     error:(err)=>{
       this.errMsg = err.error; //message
       console.log(err)
       this.isLoading = false;
     }
   })
 }
}
}
