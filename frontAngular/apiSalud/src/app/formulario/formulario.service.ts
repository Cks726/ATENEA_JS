// formulario.service.ts

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FormularioService {
  formularioPaciente: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formularioPaciente = this.fb.group({
      tipoDocumento: ['', Validators.required],
      idPaciente: ['', [Validators.required, Validators.pattern('^[0-9]{1,20}$')]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
      telefono: ['', Validators.required]
    });
  }

  submitPaciente(): Observable<any> {
    if (this.formularioPaciente.valid) {
      const pacienteData = this.formularioPaciente.value;
      // Aquí puedes hacer la llamada al servidor para guardar el paciente
      // Por ejemplo, si estás usando Spring Boot:
      // return this.http.post<any>('http://tu-servidor/api/guardarPaciente', pacienteData);
      // Por ahora, simplemente retornaremos un observable vacío como ejemplo:
      return of(null);
    }
    // Agregar una declaración de retorno en caso de que el formulario no sea válido
    return of(null);
  }
}
