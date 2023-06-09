import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PerfilpComponent } from './perfilp/perfilp.component';
import { CitaComponent } from './cita/cita.component';
import { HeaderpComponent } from './headerp/headerp.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PerfildComponent } from './perfild/perfild.component';
import { ErrorComponent } from './error/error.component';
import { HeaderdComponent } from './headerd/headerd.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'perfilp',component:PerfilpComponent },
  {path: 'cita', component:CitaComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'perfild', component:PerfildComponent},
  {path: 'error', component:ErrorComponent},
  {path: 'registro', component: RegistroComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    PerfilpComponent,
    CitaComponent, 
    HeaderpComponent, 
    LoginComponent, 
    FormularioComponent, PerfildComponent, ErrorComponent, HeaderdComponent, RegistroComponent
  ],
  imports: [
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
