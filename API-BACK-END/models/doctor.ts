export interface BasicDoctor {
    Id_Doctor : number
}

export interface Doctor extends BasicDoctor {
    nombre: string,
    apellido: string,
    Especialidad_Id: number,
    consultorio: string,
    correo: string
}