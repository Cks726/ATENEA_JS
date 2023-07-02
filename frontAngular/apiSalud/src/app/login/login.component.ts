import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  contrasena: string = '';
  recordarContrasena: boolean = false;
  mostrarHeader: boolean = false;
  primeraCarga: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar la ruta actual
        if (event.url === '/login') {
          this.mostrarHeader = !this.primeraCarga;
          this.primeraCarga = false;
        } else {
          this.mostrarHeader = true;
        }
      }
    });
  }

  iniciarSesion() {
    // Lógica para autenticar al usuario
    // ...

    // Después de autenticar al usuario
    if (this.usuarioEsPaciente()) {
      this.redirigirPagina('/perfilp');
    } else if (this.usuarioEsDoctor()) {
      this.redirigirPagina('/perfild');
    }
  }

  redirigirPagina(ruta?: string) {
    if (ruta) {
      this.router.navigate([ruta]);
    } else {
      // Lógica para redirigir a la página correspondiente según el tipo de usuario
      // ...
    }
  }

  usuarioAutenticado() {
    // Lógica para verificar si el usuario está autenticado
    return false; // Cambiar por la lógica real
  }

  usuarioEsPaciente() {
    // Lógica para verificar si el usuario es un paciente
    return false; // Cambiar por la lógica real
  }

  usuarioEsDoctor() {
    // Lógica para verificar si el usuario es un doctor
    return false; // Cambiar por la lógica real
  }
}
