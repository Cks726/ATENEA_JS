import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Paciente {
  id_paciente: 0;
  nombre: '';
  apellido: '';
  edad: 0;
  telefono: '';
}

@Component({
  selector: 'app-perfilp',
  templateUrl: './perfilp.component.html',
  styleUrls: ['./perfilp.component.css']
})
export class PerfilpComponent implements OnInit {
  paciente!: Paciente;
  idPaciente: string= ''

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { }


      ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPaciente = params['idPaciente'];

      this.obtenerDatosPaciente();
    });
  }

  obtenerDatosPaciente() {
    this.http.get<any>(`http://127.0.0.1:3000/paciente/${this.idPaciente}`).subscribe(
      response => {
        this.paciente = response['Datos del paciente'];
        console.log('Datos del paciente:', this.paciente);
      },
      error => {
        console.log('Error al obtener los datos del paciente', error);
      }
    );
  }
}

