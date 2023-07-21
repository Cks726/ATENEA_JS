import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NumberFormatStyle } from '@angular/common';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formularioPaciente: FormGroup;
  formularioDoctor: FormGroup;
  tipoPersona: string = 'paciente o docotor';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formularioPaciente = this.fb.group({
      id_paciente: null,
      nombre: '',
      apellido: '',
      edad: null,
      telefono: ''
    });

    this.formularioDoctor = this.fb.group({
      id_doctor: '',
      nombre: '',
      apellido: '',
      especialidad_id: new FormControl,
      consultorio: '',
      correo: ''
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
      this.http.post<any>('http://127.0.0.1:3000/paciente', this.formularioPaciente.value).subscribe(
        response => {
          console.log('registro exitoso', response);
          alert('resgistro exitoso');
          console.log(this.formularioPaciente.value);
        },
        error => {
          console.log('eror error alerta', error);
        }
      );

    };
  }

  submitDoctor() {
    if (this.formularioDoctor.valid) {
      this.http.post<any>('http://127.0.0.1:3000/doctor', this.formularioDoctor.value).subscribe(
        response => {
          console.log('registro exitoso', response);
          alert('doctor resgistrado')
          console.log(this.formularioDoctor.value);
        },
        error => {
          console.log('lo siento estas mal');
        }
      );
    };
  }
}
