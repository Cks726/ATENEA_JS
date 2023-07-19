import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctoresComponent } from './doctores/doctores.component';
import { CitasComponent } from './citas/citas.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FormComponent} from './pacientes/form.component';
import { PacienteService } from './pacientes/paciente.service';
import { PacientesComponent } from './pacientes/pacientes.component';


const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'doctores', component: DoctoresComponent},
  {path: 'citaMedica', component: CitasComponent},
  {path: 'paciente/create', component: FormComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PacientesComponent,
    DoctoresComponent,
    CitasComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
