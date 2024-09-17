import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { AppComponent } from '../app.component';
import { PrincipalComponent } from '../principal/principal.component';
import { JoinSelectionComponent } from '../join-selection/join-selection.component';
import { RegisterCustomerComponent } from '../register-customer/register-customer.component'; // Importar el componente
import { RegisterFreelancerComponent } from '../register-freelancer/register-freelancer.component';
import { LoginComponent } from '../login/login.component'; // Importar LoginComponent
import { routes } from '../app.routes';
import { FreelancerSectionComponent } from '../freelancer-section/freelancer-section.component';
import { ProfileCustomerComponent } from '../profile-customer/profile-customer.component'; 
import { ForgotComponent } from '../forgot/forgot.component';
import { ProjectSectionComponent } from '../project-section/project-section.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    JoinSelectionComponent,
    RegisterCustomerComponent,
    RegisterFreelancerComponent,
    LoginComponent,
    FreelancerSectionComponent,
    ProfileCustomerComponent,
    ForgotComponent,
    ProjectSectionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AdminModule { }
