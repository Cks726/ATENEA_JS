//import {BasicEspecialidades, Especialidad} from "./especialidad";
//import {BasicPaciente, Paciente } from "./paciente";
//import {Doctor} from "./doctor";

export interface BasicCita{
    Id_Cita: number
}

export interface Cita extends BasicCita{
    Paciente_Id: Number,
    Especialidad_Id: number
}


/*
export interface citaDetalles extends cita{
    especialidad: Especialidad,
    paciente:Paciente,
    doctor:Doctor
}

export interface BasicCita {
    especialidad : BasicEspecialidades,
    paciente: BasicPaciente
}*/
