import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-freelancer',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './register-freelancer.component.html',
  styleUrls: ['./register-freelancer.component.scss']
})
export class RegisterFreelancerComponent {
  freelancer = {
    firstName: '',
    lastName: '',
    email: '',
    portfolio: '',
    skills: '',
    experience: '',
    rate: null,
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  register() {
    if (this.freelancer.password === this.freelancer.confirmPassword) {
      // Lógica para el registro del freelancer
      console.log('Freelancer registrado:', this.freelancer);
      this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión después del registro
    } else {
      alert('Las contraseñas no coinciden.');
    }
  }
}
