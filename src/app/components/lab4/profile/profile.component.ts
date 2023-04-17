import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  student = {name: 'Mohamed Yossef' , age: 15 , class: 10 , gpa: 3.17 , address: 'Sidibeshr,Alexandria,Egypt' }

}
