import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  apellido: string = '';
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  fechaNacimiento: string = '';
  telefono: string = '';

  submitForm() {
    // Aquí puedes procesar los datos del formulario
    console.log('Formulario enviado');
  }
}
