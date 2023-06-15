import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctoresComponent } from './doctores/doctores.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'doctores', component: DoctoresComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PacientesComponent,
    DoctoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
