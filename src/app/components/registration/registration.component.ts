import { Component , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  name: string = "";
  age: string = "";
  valid: string = "";

  @Output() studentData = new EventEmitter();


  addStudent(){

    if(this.name.length > 3 && +this.age <= 40){

      this.studentData.emit({name: this.name, age: this.age})
      this.name = this.age = ""

    }
  }

}
