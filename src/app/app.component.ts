import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labs';

  studentData: {name: string , age: string}[] = []

  getData(data: any){

    this.studentData.push(data);

  }
}
