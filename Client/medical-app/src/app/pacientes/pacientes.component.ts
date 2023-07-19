import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
})

export class PacientesComponent implements OnInit {

  pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.obtenerPacientes();
  }

  async obtenerPacientes(): Promise<Paciente[]> {
    this.pacientes= await this.pacienteService.obtenerPacientes();
    return this.pacientes;
  }
}
