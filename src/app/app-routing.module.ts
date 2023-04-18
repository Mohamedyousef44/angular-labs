import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/lab4/home/home.component';
import { FormComponent } from './components/lab4/form/form.component';
import { StudentsComponent } from './components/lab4/students/students.component';
import { ProfileComponent } from './components/lab4/profile/profile.component';
import { ErrorComponent } from './components/lab4/error/error.component';


const routes: Routes = [

  {path:'' , component: HomeComponent},
  {path:'create' , component: FormComponent},
  {path:'students' , component: StudentsComponent},
  {path:'student/:id' , component: ProfileComponent},
  {path:'**' , component: ErrorComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
