import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  numeroIdentificacion: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/perfilp', this.numeroIdentificacion]);
  }

  iniciarSesionDoctor() {
    this.router.navigate(['/perfild', this.numeroIdentificacion]);
  }
}

