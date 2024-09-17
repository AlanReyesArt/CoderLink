import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [NgIf,NgFor,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    // Lógica para manejar el inicio de sesión
    console.log('Iniciando sesión con:', this.user);
    this.router.navigate(['/profile-customer']); // Redirige a la página principal después del inicio de sesión
  }
}
