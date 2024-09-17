import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent {
  customer = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private router: Router) {}

  register() {
    if (this.customer.password === this.customer.confirmPassword) {
      // Lógica para el registro de clientes
      console.log('Cliente registrado:', this.customer);
      this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión después del registro
    } else {
      alert('Las contraseñas no coinciden.');
    }
  }
}
