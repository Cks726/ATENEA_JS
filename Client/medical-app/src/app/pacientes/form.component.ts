import { Component, OnInit } from "@angular/core";
import { Paciente } from "./paciente";
import { PacienteService } from "./paciente.service";
import { Router } from "@angular/router";

@Component({
  selector: 'formulario-pacientes',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {

    public paciente: Paciente = new Paciente("", "", 0, "",0, "");
  
    constructor(private pacienteService: PacienteService, private router: Router) { }
  
    ngOnInit(): void {
    }

    public calcularEdad() {
      if (this.paciente.cumple) {
        const birthdateLocal = new Date(this.paciente.cumple);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthdateLocal.getFullYear();
        this.paciente.age = age;
      }
    }

    public async crearPaciente() {

      this.paciente.cumple = this.paciente.cumple.toString();
      
      if (!this.paciente.age) {
        this.calcularEdad();
      }
  
      try {
        // Crear la instancia de Paciente y enviarla al servicio para guardarla
        await this.pacienteService.crearPaciente(this.paciente);
  
        // Mostrar el alert cuando el paciente se haya creado exitosamente
        alert("¡El paciente ha sido creado exitosamente!");
  
        // Redirigir a otra página (por ejemplo, una página de confirmación o listado de pacientes)
        this.router.navigate(['/create']);
      } catch (error: any) {
        // Si ocurre un error, puedes mostrar un alert de error aquí si lo deseas
        alert("Hubo un error al crear el paciente: " + error.message);
      }
    }
  }
  