import { Component } from '@angular/core';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent {
  numeroDocumento: string = '';
  especialidad: string = '';

  enviarCita() {
    // Lógica para enviar la cita al doctor
    console.log('Cita enviada');
  }
}
