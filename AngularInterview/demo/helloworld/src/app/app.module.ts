import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydirectiveDirective } from './mydirective.directive';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveComponentComponent } from './reactive-component/reactive-component.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';





@NgModule({
  declarations: [
    AppComponent,
    MydirectiveDirective,
    StudentListComponent,
    StudentDetailsComponent,
    ParentComponent,
    ChildComponent,
    ReactiveFormsComponent,
    ReactiveComponentComponent,
    RegistrationFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
