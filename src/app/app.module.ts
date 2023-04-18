import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SliderComponent } from './components/slider/slider.component';
import { ButtonComponent } from './components/button/button.component';
import { StudentComponent } from './components/student/student.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavComponent } from './components/lab4/nav/nav.component';
import { FooterComponent } from './components/lab4/footer/footer.component';
import { HomeComponent } from './components/lab4/home/home.component';
import { FormComponent } from './components/lab4/form/form.component';
import { StudentsComponent } from './components/lab4/students/students.component';
import { ProfileComponent } from './components/lab4/profile/profile.component';
import { ErrorComponent } from './components/lab4/error/error.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SliderComponent,
    ButtonComponent,
    StudentComponent,
    RegistrationComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
