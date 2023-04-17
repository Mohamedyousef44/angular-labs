import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {


  students:{name: string , email: string , age: number , gender: string , class: number , gpa: number }[]=[
    {name: 'Mohamed' , email: 'mo2020@gmail.com' , age: 15 , gender: 'M' , class: 10 , gpa: 3.74},
    {name: 'Rehab' , email: 'rehab@gmail.com' , age: 13 , gender: 'F' , class: 9 , gpa: 3.73},
    {name: 'Shimaa' , email: 'shimaa@gmail.com' , age: 16 , gender: 'F' , class: 8 , gpa: 3.44},
    {name: 'Rana' , email: 'rana@gmail.com' , age: 20 , gender: 'F' , class: 10 , gpa: 3.33},
    {name: 'Marwan' , email: 'maro@gmail.com' , age: 11 , gender: 'M' , class: 7 , gpa: 3.14},
    {name: 'Fathy' , email: 'fatouh@gmail.com' , age: 14 , gender: 'M' , class: 4 , gpa: 3.05},

  ]

}
