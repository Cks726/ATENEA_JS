import { Injectable } from "@angular/core";
import { Paciente } from "./paciente";
import { BehaviorSubject, Observable, of, lastValueFrom } from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from "rxjs";


@Injectable()
export class PacienteService{
    private urlEndPoint: string = 'http://localhost:8080/paciente';
    
    private httpHeaders= new HttpHeaders({'Content-type': 'application/json'});

    private edited$ = new BehaviorSubject<Paciente[]>([]);


    constructor(private http: HttpClient){
        this.edited$.subscribe(async(newValue) => {
            const pacientesNew = await this.obtenerPacientes();
        })
    }

    //CREAR CLIENTE
    async crearPaciente(newPaciente: Paciente) {
        const pacienteCreado = await lastValueFrom(this.http.post<Paciente[]>(this.urlEndPoint+'/create', newPaciente).pipe(map((response) => response)));
        this.edited$.next(pacienteCreado);
        return this.updatePacientesTable();
    }

    //OBTENER PACIENTES
    obtenerPacientes() {
        return lastValueFrom(this.http.get<Paciente[]>(this.urlEndPoint+'/search').pipe(map((response) => response)));
    }

    //ACTUALIZAR PACIENTES EN LA TABLA
    updatePacientesTable(){
        return this.edited$.getValue();
    }



}