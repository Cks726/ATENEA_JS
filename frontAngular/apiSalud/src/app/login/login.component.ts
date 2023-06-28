import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  recordarContrasena: boolean = false;

  iniciarSesion() {
    // Lógica para iniciar sesión
    console.log('Iniciar sesión');
  }
}

