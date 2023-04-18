import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  student :any;

  constructor(private fb: FormBuilder , private router: Router , private studentData: StudentsService ){
    this.student = {name:'a' , email:'a', age: 0 , class: 0 , gpa: 0 , gender: 'm'};

  }

  ValidationForm = this.fb.group({

    name: [null , [Validators.required , Validators.minLength(3), Validators.maxLength(10)]],
    email: [null, [Validators.email, Validators.required ]],
    age: [null,[Validators.required , Validators.min(6) , Validators.max(18) ]],
    gender: [null,Validators.required ],
    gpa: [null,[Validators.required , Validators.min(2) , Validators.max(4)]],
    class: [null,Validators.required],

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


    if(this.ValidationForm.valid){

      this.student.name = this.ValidationForm.controls['name'].value;
      this.student.email = this.ValidationForm.controls['email'].value;
      this.student.age = this.ValidationForm.controls['age'].value;
      this.student.class = this.ValidationForm.controls['class'].value;
      this.student.gender = this.ValidationForm.controls['gender'].value;
      this.student.gpa = this.ValidationForm.controls['gpa'].value;

      console.log(this.studentData.create(this.student).subscribe())
      this.router.navigate(['/students'])

    }

  }
}
