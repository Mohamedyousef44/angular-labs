import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private fb: FormBuilder , private router: Router ){}

  ValidationForm = this.fb.group({
    name: [null , [Validators.required , Validators.minLength(3), Validators.maxLength(10) ] ],
    email: [null, [Validators.email, Validators.required ]],
    password: [null,[Validators.required , Validators.minLength(8) , Validators.maxLength(12) ]],
    age: [null,[Validators.required , Validators.min(6) , Validators.max(18) ]],
    gender: [null,Validators.required ],
    gpa: [null,Validators.required , Validators.min(2) , Validators.max(4)],
  })

  // ValidationForm = new FormGroup({

  //   name:new FormControl('' , [Validators.required , Validators.minLength(3), Validators.maxLength(10) ]),
  //   email:new FormControl('' , [Validators.email, Validators.required ]),
  //   password:new FormControl('' , [Validators.required , Validators.minLength(8) , Validators.maxLength(12) ])

  // })

  classes: number[]=[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12]

  get nameValid(){
    return this.ValidationForm.controls["name"].valid;
  }

  get emailValid(){
    return this.ValidationForm.controls["email"].valid;
  }

  get passValid(){
    return this.ValidationForm.controls["password"].valid;
  }

  get ageValid(){
    return this.ValidationForm.controls["age"].valid;
  }

  get genderValid(){
    return this.ValidationForm.controls["gender"].valid;
  }

  get gpaValid(){
    return this.ValidationForm.controls["gpa"].valid;
  }

  show(){

    if(this.ValidationForm.valid)

    this.router.navigate(['/'])

  }

}
