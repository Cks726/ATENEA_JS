import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { PerfilpComponent } from './perfilp/perfilp.component';
import { CitaComponent } from './cita/cita.component';
import { HeaderpComponent } from './headerp/headerp.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PerfildComponent } from './perfild/perfild.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'perfilp',component:PerfilpComponent },
  {path: 'cita', component:CitaComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'perfild', component:PerfildComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    PerfilpComponent,
    CitaComponent, 
    HeaderpComponent, 
    LoginComponent, 
    FormularioComponent, PerfildComponent, ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
