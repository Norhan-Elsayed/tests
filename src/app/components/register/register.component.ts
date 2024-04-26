import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormControlOptions, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _Router:Router , private _AuthService:AuthService , private  _FormBuilder:FormBuilder){}
  errMsg:string= "";
  isLoading:boolean =false;
  registerForm:FormGroup = this._FormBuilder.group({
    name:['',[Validators.required , Validators.minLength(3) ,Validators.maxLength(10)]],
    email:['',[Validators.required , Validators.email]],
    password:['',[Validators.required , Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]],
    rePassword:['',[Validators.required]],
    phone:['',[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]]
  }, {validators:[this.confirmPassword]} as FormControlOptions)





  confirmPassword(group:FormGroup):void{
  const password = group.get('password');
  const rePassword = group.get('rePassword');

  if(rePassword?.value == ''){
    rePassword?.setErrors({required:true})
  }

  else if(password?.value != rePassword?.value){
   rePassword?.setErrors({mismatch:true})
  }
  }

  // handleForm():void{
  //   const userData = this.registerForm.value;
  //   this.isLoading = true;
  //   if(this.registerForm.valid === true) {
  //   this._AuthService.register(userData).subscribe({
  //     next: (response)=>{
  //       this.isLoading = false;
  //     this._Router.navigate(['/login'])
  //     },
  //     error:(err)=>{
  //       this.errMsg = err.error.message;
  //       this.isLoading = false;
  //     }
  //   })
  // }
  // }


}
