import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formularioPaciente: FormGroup;
  formularioDoctor: FormGroup;
  tipoPersona: string = 'paciente';

  constructor(private fb: FormBuilder) {
    this.formularioPaciente = this.fb.group({
      tipoDocumento: ['', Validators.required],
      idPaciente: ['', [Validators.required, Validators.pattern('^[0-9]{1,20}$')]],
      nombre:['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required, Validators.pattern('^[0-200]{1,3}')],
      telefono: ['', Validators.required]
    });

    this.formularioDoctor = this.fb.group({
      idDoctor: ['', [Validators.required, Validators.pattern('^[0-9]{1,20}$')]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      especialidad: ['', Validators.required],
      consultorio: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]]
    });
  }


  esPaciente() {
    return this.tipoPersona === 'paciente';
  }

  esDoctor() {
    return this.tipoPersona === 'doctor';
  }

  submitPaciente() {
    if (this.formularioPaciente.valid) {
      // Lógica para registrar paciente
      console.log(this.formularioPaciente.value);
    }
  }

  submitDoctor() {
    if (this.formularioDoctor.valid) {
      // Lógica para registrar doctor
console.log(this.formularioDoctor.value);
    }
  }
}
