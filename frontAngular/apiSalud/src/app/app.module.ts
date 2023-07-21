import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CitaComponent } from './cita/cita.component';
import { ErrorComponent } from './error/error.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HeaderpComponent } from './headerp/headerp.component';
import { LoginComponent } from './login/login.component';
import { PerfildComponent } from './perfild/perfild.component';
import { PerfilpComponent } from './perfilp/perfilp.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'perfilp/:idPaciente',component:PerfilpComponent },
  {path: 'cita', component:CitaComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'perfild/:idDoctor', component:PerfildComponent},
  {path: 'error', component:ErrorComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    PerfilpComponent,
    CitaComponent, 
    HeaderpComponent, 
    LoginComponent, 
    FormularioComponent, 
    PerfildComponent, 
    ErrorComponent, 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
