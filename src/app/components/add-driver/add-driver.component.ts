// import { AdddriverService } from './../../core/services/adddriver.service';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, FormControlOptions } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add-driver',
//   standalone: true,
//   imports: [CommonModule , ReactiveFormsModule],
//   templateUrl: './add-driver.component.html',
//   styleUrls: ['./add-driver.component.scss']
// })
// export class AddDriverComponent {

//   constructor(private _AdddriverService:AdddriverService ,private _Router:Router , private _FormBuilder:FormBuilder){}
//   errMsg:string = '';
//   // isLoading:boolean = false;

//   registersForm:FormGroup = this._FormBuilder.group({
//     name : new FormControl('' , [Validators.required]),
//     email : new FormControl('' , [Validators.required]),
//     password : new FormControl('' , [Validators.required]),
//     address : new FormControl('' , [Validators.required]),
//     phone : new FormControl('' , [Validators.required]),
//     salary : new FormControl('' , [Validators.required]),
//     img : new FormControl('' , [Validators.required]),
//     adminID : new FormControl('' , [Validators.required]),
//     compID : new FormControl('' , [Validators.required]),
//     mgrID: new FormControl('' , [Validators.required]),

//   })
//   sendForm():void{

//     const assisData = (this.registersForm.value);
//     // this.isLoading = true;

//       if(this.registersForm.valid === true){
//       this._AdddriverService.addAssis(assisData).subscribe({
//         next:(response)=>{
//           console.log(response)
//           alert("success")
//           // this.isLoading = false;
//         },
//         error:(err)=>{
//           console.log(err)
//           alert("failed")
//           // this.isLoading = false;
//         }
//       })
//   }
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdddriverService } from './../../core/services/adddriver.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss'],
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
})
export class AddDriverComponent {
  errMsg: string = '';
  registersForm: FormGroup;

  constructor(private _AdddriverService: AdddriverService, private _FormBuilder: FormBuilder) {
    this.registersForm = this._FormBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      salary: ['', Validators.required],
      img: ['', Validators.required],
      adminID: ['', Validators.required],
      compID: ['', Validators.required],
      mgrID: ['', Validators.required],
    });
  }

  sendForm(): void {
    if (this.registersForm.valid) {
      const formData = new FormData();
      Object.entries(this.registersForm.value).forEach(([key, value]) => {
        formData.append(key, String(value)); // Explicitly cast value to string
      });

      this._AdddriverService.addAssis(formData).subscribe({
        next: (response) => {
          console.log(response);
          alert("Success");
        },
        error: (err) => {
          console.error(err);
          alert("Failed");
        }
      });
    }
  }


}












