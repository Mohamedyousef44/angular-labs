import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  students: any;
  constructor(public data: StudentsService){

  }
  ngOnInit(): void {
     this.data.all().subscribe({
        next:(data)=>{
            this.students = data;
        },
        error:(err)=>{console.log(err)}
      })
  }

}
