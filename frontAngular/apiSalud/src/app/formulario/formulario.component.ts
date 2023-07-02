import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  tipoPersona: string = 'paciente';
  edad: number | undefined;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      tipoPersona: ['paciente', Validators.required],

      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoDocumento: [''],
      numeroDocumento: [''],
      fechaNacimiento: [''],
      edad: [{ value: '', disabled: true }],
      telefono: ['', Validators.required],
      especializacion: ['medicinaGeneral'],
      consultorio: [''],
      correo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.esPaciente()) {
      const fechaNacimiento = this.formulario.get('fechaNacimiento')?.value;
      const edad = this.calcularEdad(fechaNacimiento);
      this.formulario.get('edad')?.setValue(edad);
    }

    // Aquí puedes realizar la lógica correspondiente al enviar el formulario al back end
    console.log(this.formulario.value);
  }

  esPaciente() {
    return this.tipoPersona === 'paciente';
  }

  esDoctor() {
    return this.tipoPersona === 'doctor';
  }

  calcularEdad(fechaNacimiento: string) {
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNac = fechaNac.getMonth();

    if (mesActual < mesNac || (mesActual === mesNac && fechaActual.getDate() < fechaNac.getDate())) {
      edad--;
    }

    return edad;
  }
}
