import { Component } from '@angular/core';
import { FormBuilder, FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private fb: FormBuilder , private router: Router ){}

  ValidationForm = this.fb.group({
    name: [null , [Validators.required , Validators.minLength(3), Validators.maxLength(10) ] ],
    email: [null, [Validators.email, Validators.required ]],
    password: [null,[Validators.required , Validators.minLength(8) , Validators.maxLength(12) ]],
  })

  // ValidationForm = new FormGroup({

  //   name:new FormControl('' , [Validators.required , Validators.minLength(3), Validators.maxLength(10) ]),
  //   email:new FormControl('' , [Validators.email, Validators.required ]),
  //   password:new FormControl('' , [Validators.required , Validators.minLength(8) , Validators.maxLength(12) ])

  // })

  get nameValid(){
    return this.ValidationForm.controls["name"].valid;
  }

  get emailValid(){
    return this.ValidationForm.controls["email"].valid;
  }

  get passValid(){
    return this.ValidationForm.controls["password"].valid;
  }

  show(){

    console.log(this.router)

    if(this.ValidationForm.valid)

    this.router.navigate(['/'])

  }
}
