import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apiSalud' ;
  tipoUsuario: string = ''; // Almacena el tipo de usuario (paciente o doctor)
  mostrarHeader: boolean = false;
  primeraCarga: boolean = true;
 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/login') {
          this.mostrarHeader = false;
        } else {
          const usuario = localStorage.getItem('tipoUsuario');
          if (usuario === 'doctor' || usuario === 'paciente') {
            this.tipoUsuario = usuario;
            this.mostrarHeader = true;
          } else {
            this.mostrarHeader = false;
          }
        }
      }
    });
  }
}



