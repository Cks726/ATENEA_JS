-- Tabla de las Especialidades
create table Especialidad (
Id_Especialidad int primary key,
Nombre varchar(100)
);

-- Ingresar lista de Especialidades
insert into especialidad values(1, "Medicinageneral");
insert into especialidad values(2, "Cardiología");
insert into especialidad values(3, "Medicina interna");
insert into especialidad values(4, "Dermatología");
insert into especialidad values(5, "Rehabilitación física");
insert into especialidad values(6, "Psicología");
insert into especialidad values(7, "Odontología");
insert into especialidad values(8, "Radiología");

-- Tabla de Doctores
create table Doctor (
    Id_Doctor bigint, 
    Nombre varchar(30),
    Apellido varchar(30),
    Especialidad_Id int,
    Consultorio varchar(30),
    Correo varchar(50),
    primary key (Id_Doctor),
    foreign key (Especialidad_Id) references Especialidad(Id_Especialidad)
);

-- Ingresar un Doctor
insert into doctor value (1235657869, "Gregory", "House", 2, "203", "dr.gregoryHouse@gmail.com");

-- Tabla de Pacientes
create table Pacientes (
Id_Paciente bigint,
Nombre varchar(30),
Apellido varchar(30),
Edad int,
Telefono varchar(30),
primary key(Id_Paciente)
);

-- Ingresar un Paciente
insert into pacientes value (10124563964, "Wilson", "Serrato Garzón", 28, "3196832654");
--Ver todos los Pacientes
SELECT * FROM pacientes;
-- Tabla de las Citas con la Especialidad
create table Cita(
Id_Cita int auto_increment primary key,
Paciente_Id bigint,
Especialidad_Id int,
foreign key(Paciente_Id) references Pacientes(Id_Paciente),
foreign key(Especialidad_Id) references Especialidad(Id_Especialidad)
);

-- Agendar Cita/crear una cita nueva
insert into cita(paciente_Id, Especialidad_Id) value(10124563964, 2);

-- Ver Cita  info de la cita doctor-especialidad-consultorio
select doctor.Nombre, doctor.Apellido, especialidad.Nombre as especialidad, doctor.Consultorio, doctor.Correo
from doctor
inner join cita on doctor.Especialidad_Id = cita.Especialidad_Id
inner join especialidad on doctor.Especialidad_Id = especialidad.Id_Especialidad
where cita.Paciente_Id = "10124563964";   -- "Id del paciente" = ?


