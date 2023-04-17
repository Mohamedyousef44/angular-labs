import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  ValidationForm = new FormGroup({

    name:new FormControl(null , [Validators.required , Validators.minLength(3), Validators.maxLength(10) ]),
    email:new FormControl(null , [Validators.email, Validators.required ]),
    password:new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.maxLength(12) ])

  })

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

    console.log(this.ValidationForm)
    console.log(this.ValidationForm.controls["name"].valid)
    console.log(this.ValidationForm.controls["email"].valid)
    console.log(this.ValidationForm.controls["password"].valid)

  }
}
