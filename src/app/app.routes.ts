import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { JoinSelectionComponent } from './join-selection/join-selection.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { LoginComponent } from './login/login.component';
import { FreelancerSectionComponent } from './freelancer-section/freelancer-section.component';
import { ProfileFreelancerComponent } from './profile-freelancer/profile-freelancer.component';
import { ProfileCustomerComponent } from './profile-customer/profile-customer.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProjectSectionComponent } from './project-section/project-section.component';



export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'join', component: JoinSelectionComponent },
  { path: 'register-client', component: RegisterCustomerComponent },
  { path: 'register-freelancer', component: RegisterFreelancerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'freelancer', component: FreelancerSectionComponent },
  { path: 'profile-freelancer', component: ProfileFreelancerComponent },
  { path: 'profile-customer', component: ProfileCustomerComponent },
  { path: 'forgot', component: ForgotComponent},
  { path: 'project-section', component: ProjectSectionComponent}
];
