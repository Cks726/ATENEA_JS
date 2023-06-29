import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfild',
  templateUrl: './perfild.component.html',
  styleUrls: ['./perfild.component.css']
})
export class PerfildComponent implements OnInit {
  doctor: any = {};

  constructor() { }

  ngOnInit(): void {
    // Aquí se asignan los datos del doctor obtenidos del registro
    this.doctor = {
      nombre: '',
      apellido: '',
      especializacion: '',
      consultorio: '',
      correo: ''
    };
  }

}
