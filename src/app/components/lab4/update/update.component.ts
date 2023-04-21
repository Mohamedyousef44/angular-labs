import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  student: any;
  ValidationForm: any;
  constructor(private router: Router, private studentId: ActivatedRoute , private studentData: StudentsService ){
    this.id = +this.studentId.snapshot.params['id']
  }
  ngOnInit(): void {

    this.studentData.getOneById(this.id).subscribe({

      next: (data)=>{

        this.student = data;

        this.ValidationForm = new FormGroup({

          name: new FormControl(this.student.name , [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
          email: new FormControl(this.student.email, [Validators.email, Validators.required]),
          age: new FormControl(this.student.age,[Validators.required , Validators.min(6) , Validators.max(18)]),
          gender: new FormControl(this.student.gender,Validators.required ),
          gpa: new FormControl(this.student.gpa,[Validators.required , Validators.min(1) , Validators.max(4)]),
          class: new FormControl(this.student.class,Validators.required),

        })
      }
    })
  }

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

  update(){

    if(this.ValidationForm.valid){

      this.student.name = this.ValidationForm.controls['name'].value;
      this.student.email = this.ValidationForm.controls['email'].value;
      this.student.age = this.ValidationForm.controls['age'].value;
      this.student.class = this.ValidationForm.controls['class'].value;
      this.student.gender = this.ValidationForm.controls['gender'].value;
      this.student.gpa = this.ValidationForm.controls['gpa'].value;

      console.log(this.studentData.update(this.id,this.student).subscribe())
      this.router.navigate(['/students']);
    }
  }

}
