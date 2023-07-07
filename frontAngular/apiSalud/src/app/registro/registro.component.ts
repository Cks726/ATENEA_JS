import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Paciente {
  Id_Paciente: number | null;
  nombre: string;
  apellido: string;
  edad: number | null;
  telefono: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  paciente: Paciente = {
    Id_Paciente: null,
    nombre: '',
    apellido: '',
    edad: null,
    telefono: ''
  };

  message: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post<any>('http://127.0.0.1:3000/nuevo', this.paciente).subscribe(
      response => {
        this.message = 'Registro exitoso.';
      },
      error => {
        this.message = 'Error al registrar.';
      }
    );
  }
}
