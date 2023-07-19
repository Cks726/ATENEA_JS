import { Component, OnInit } from "@angular/core";
import { Paciente } from "./paciente";
import { PacienteService } from "./paciente.service";
import { Router } from "@angular/router";

@Component({
  selector: 'formulario-pacientes',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {

    public paciente: Paciente = new Paciente("", "", 0, "", "");
  
    constructor(private pacienteService: PacienteService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    public async crearPaciente() {
      // Convertir el objeto Date a una cadena en formato ISO
      this.paciente.cumple = this.paciente.cumple.toString();
  
      // Crear la instancia de Paciente y enviarla al servicio para guardarla
      const newPaciente: Paciente = new Paciente(
        this.paciente.namePaciente,
        this.paciente.lastNamePaciente,
        this.paciente.cc,
        this.paciente.cumple,
        this.paciente.phonePaciente
      );
  
     await this.pacienteService.crearPaciente(newPaciente)
    }
  }
  