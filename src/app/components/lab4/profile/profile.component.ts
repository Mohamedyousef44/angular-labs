import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private route: ActivatedRoute){

  }

  id = +this.route.snapshot.params['id']-1

  students:{name: string , email: string , age: number , gender: string , class: number , gpa: number , address: string }[]=[
    {name: 'Mohamed' , email: 'mo2020@gmail.com' , age: 15 , gender: 'M' , class: 10 , gpa: 3.74,address:'Sidibeshr,Alexandria,Egypt'},
    {name: 'Rehab' , email: 'rehab@gmail.com' , age: 13 , gender: 'F' , class: 9 , gpa: 3.73,address:''},
    {name: 'Shimaa' , email: 'shimaa@gmail.com' , age: 16 , gender: 'F' , class: 8 , gpa: 3.44,address:''},
    {name: 'Rana' , email: 'rana@gmail.com' , age: 20 , gender: 'F' , class: 10 , gpa: 3.33,address:''},
    {name: 'Marwan' , email: 'maro@gmail.com' , age: 11 , gender: 'M' , class: 7 , gpa: 3.14,address:''},
    {name: 'Fathy' , email: 'fatouh@gmail.com' , age: 14 , gender: 'M' , class: 4 , gpa: 3.05,address:''},

  ]

  get student(){
    if(this.id < this.students.length && this.id >= 0 )
      return this.students[this.id]
    else return {name: 'not found' , age:'' ,gpa: '' , class: '' , address: ''}

  }

}
