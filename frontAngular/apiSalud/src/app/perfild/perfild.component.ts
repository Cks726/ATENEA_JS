import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Docotor {
  id_doctor: 0;
  nombre: '';
  apellido: '';
  especialidad_id:'';
  consultorio: '';
  correo: '';
}

@Component({
  selector: 'app-perfild',
  templateUrl: './perfild.component.html',
  styleUrls: ['./perfild.component.css']
})
export class PerfildComponent implements OnInit {
  doctor!: Docotor;
  idPaciente: string= ''

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { }


      ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPaciente = params['idDoctor'];

      this.obtenerDatosPaciente();
    });
  }

  obtenerDatosPaciente() {
    this.http.get<any>(`http://127.0.0.1:3000/doctor/${this.idPaciente}`).subscribe(
      response => {
        this.doctor = response['Datos del doctor'];
        console.log('Datos del doctor:', this.doctor);
      },
      error => {
        console.log('Error al obtener los datos del doctor', error);
        alert('Error al obtener los datos del doctor') ;
      }
    );
  }
}

