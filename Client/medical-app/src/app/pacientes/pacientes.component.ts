import { Component } from '@angular/core';
import { Paciente } from './paciente';
@Component({
  selector: 'formulario-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  pacientes: Paciente[] = [
{    nombre: 'natalia', apellido: 'mayor', cedula: '123', fecha_nacimiento: '5214', telefono: '666666'}
  ]

}
