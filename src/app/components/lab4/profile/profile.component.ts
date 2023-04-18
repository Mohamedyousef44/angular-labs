import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  students: any;

  constructor(private route: ActivatedRoute , private data: StudentsService){

  }
  ngOnInit(): void {
    this.data.all().subscribe({
      next:(data)=>{
        this.students = data;
      }
    })
  }

  id = +this.route.snapshot.params['id']-1;

  get student(){

    if(this.id < this.students.length && this.id >= 0 )
      return this.students[this.id]

    else return {name: 'not found' , age:'' ,gpa: '' , class: '' , address: ''}
  }
}
