import { Component } from '@angular/core';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent {
  numeroDocumento: string='';
  especialidad: string='';
  especialidades: string[] = ['Medicina general', 'Cardiología', 'Medicina interna', 'Dermatología', 'Rehabilitación física', 'Psicología', 'Odontología', 'Radiología'];
  citas: any[] = [];

  agregarCita() {
    const nuevaCita = {
      id: this.citas.length + 1,
      doctor: 'Dr. House',
      especialista: this.especialidad,
      consultorio: 'Consultorio 101'
    };
    this.citas.push(nuevaCita);
    this.numeroDocumento = '';
    this.especialidad = '';
  }

  editarCita(cita: any) {
    // Implementa la lógica para editar una cita
    console.log('Editar cita:', cita);
  }

  eliminarCita(cita: any) {
    const index = this.citas.indexOf(cita);
    if (index !== -1) {
      this.citas.splice(index, 1);
    }
  }
}
