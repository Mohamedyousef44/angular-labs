import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  students: any;
  id: any;
  constructor(private data: StudentsService , private route: Router ){

  }
  ngOnInit(): void {
     this.data.all().subscribe({
        next:(data)=>{
            this.students = data;
            console.log(this.students)
        },
        error:(err)=>{console.log(err)}
      })
  }

  getID(data: any){
    this.id = data
  }

  deleteStudent(){
    this.data.delete(this.id).subscribe();
    window.location.reload();
  }

}
