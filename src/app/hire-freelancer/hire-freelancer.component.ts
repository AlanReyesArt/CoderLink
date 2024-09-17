import { Component } from '@angular/core';

@Component({
  selector: 'app-hire-project',
  standalone: true,
  imports: [],
  templateUrl: './hire-project.component.html',
  styleUrls: ['./hire-project.component.scss'] // Asegúrate de que sea 'styleUrls', no 'styleUrl'
})
export class HireProjectComponent {
  // Lista de freelancers
  freelancers = [
    {
      name: 'Nombres y Apellidos',
      description: 'Pequeña descripción',
      rating: 5.0,
      reviews: 10,
      hourlyRate: 50,
      imageUrl: 'assets/profile-placeholder.png'
    },
    {
      name: 'Nombres y Apellidos',
      description: 'Pequeña descripción',
      rating: 5.0,
      reviews: 10,
      hourlyRate: 50,
      imageUrl: 'assets/profile-placeholder.png'
    }
  ];

  // Método para manejar el filtrado (ejemplo simple)
  filterFreelancers() {
    alert('Filtrar freelancers');
  }

  // Método para ver el perfil del freelancer
  viewProfile(freelancer: any) {
    alert(`Ver perfil de: ${freelancer.name}`);
  }
}
