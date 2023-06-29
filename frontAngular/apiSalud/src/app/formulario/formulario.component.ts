import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  tipoPersona:string ='paciente';


  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      tipoPersona: ['paciente', Validators.required],
      foto: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoDocumento: ['dni'],
      numeroDocumento: [''],
      fechaNacimiento: [''],
      edad: [''],
      telefono: ['', Validators.required],
      especializacion: ['medicinaGeneral'],
      consultorio: [''],
      correo: ['']
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

    // Aquí puedes realizar la lógica correspondiente al enviar el formulario
    console.log(this.formulario.value);
  }

  esPaciente() {
    return this.tipoPersona=== 'paciente';
  }

  esDoctor() {
    return this.tipoPersona=== 'doctor';
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
