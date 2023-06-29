import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    // Lógica para verificar el estado de autenticación
    // Si el usuario está autenticado, establece mostrarHeader como true
    // Si el usuario no está autenticado, establece mostrarHeader como false
  }

  iniciarSesion() {
    // Lógica para iniciar sesión
    console.log('Iniciar sesión');
  }
}
