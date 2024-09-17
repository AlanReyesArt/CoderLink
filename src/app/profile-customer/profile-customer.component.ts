import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForOf,NgIf } from '@angular/common';


@Component({
  selector: 'app-profile-customer',
  standalone:true,
  imports: [NgIf,NgForOf],  
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.scss']
})
export class ProfileCustomerComponent {
  customer = {
    name: 'John Doe',
    description: 'Desarrollador y cliente de software buscando talentos.',
    location: 'Nueva York, EE.UU.',
    joinedDate: 'Enero 2021',
    projects: [
      {
        id: 1,
        title: 'Desarrollo de sitio web',
        description: 'Buscando un freelancer para desarrollar un sitio web moderno.'
      },
      {
        id: 2,
        title: 'Aplicación móvil',
        description: 'Necesito un desarrollador para crear una aplicación móvil nativa.'
      }
    ]
  };

  constructor(private router: Router) {}

  editProfile() {
    // Redirige a la página de edición de perfil
    this.router.navigate(['/edit-profile']);
  }

  createProject() {
    // Redirige a la página de creación de proyectos
    this.router.navigate(['/create-project']);
  }

  viewProject(projectId: number) {
    // Lógica para ver el proyecto
    console.log(`Viendo el proyecto con ID: ${projectId}`);
  }
}
