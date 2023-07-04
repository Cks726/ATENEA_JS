export interface BasicPaciente {
    Id_Paciente: number;
}

export interface Paciente extends BasicPaciente {
    nombre: string;
    apellido: string;
    edad: number;
    telefono: string;
}

