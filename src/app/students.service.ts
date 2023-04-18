import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private client: HttpClient) { }

  private Base_URL = "http://localhost:3000/students";

  all(){
    return this.client.get(this.Base_URL)
  }

  getOneById(id: number){
    return this.client.get(this.Base_URL+'/'+id)
  }

  create(student: any){
    return this.client.post(this.Base_URL , student)
  }

  update(id: number,student: any){
    return this.client.put(this.Base_URL+'/'+id , student)
  }

  delete(student: any){
    return this.client.delete(this.Base_URL , student)
  }
}
