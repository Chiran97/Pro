import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { AssignerComponent } from './assigner/assigner.component';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ProjectComponent,
    AssignerComponent,
    ProjectListComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
