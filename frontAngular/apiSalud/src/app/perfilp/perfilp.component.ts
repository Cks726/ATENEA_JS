import { Component } from '@angular/core';

@Component({
  selector: 'app-perfilp',
  templateUrl: './perfilp.component.html',
  styleUrls: ['./perfilp.component.css']
})
export class PerfilpComponent {
  nombre: string = "";
  cedula: string = "";
  apellido: string = "";
  edad: number = 0;
  telefono: string = "";
  editar: boolean = false;

  editarPerfil() {
    this.editar = true;
  }

  guardarPerfil() {
    // Aquí se realizaría la lógica para guardar el perfil actualizado en el backend
    this.editar = false;
  }

  eliminarPerfil() {
    // Aquí se realizaría la lógica para eliminar el perfil en el backend
    // y redirigir al usuario a la página de inicio o a otro componente
    console.log('Perfil eliminado');
  }
}

export class LoginComponent {
  usuario: string ='';
  contrasena: string ='';
  recordarContrasena: boolean = false;

  constructor() {
    // Puedes realizar otras acciones en el constructor si es necesario
    // Aquí asignamos el valor predeterminado a recordarContrasena
    this.recordarContrasena = false;
  }

  iniciarSesion() {
    // Lógica para iniciar sesión
    console.log('Iniciar sesión');
  }
}