import { Doctor,BasicDoctor } from "../models/doctor";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
import { Paciente } from "../models/paciente";

export const create = (doctor: Doctor, callback: Function) => {
    const queryString = 'INSERT INTO doctor (Id_Doctor, nombre, apellido, Especialidad_Id, consultorio, correo) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(
        queryString,
        [  doctor.Id_Doctor,
            doctor.nombre,
            doctor.apellido,
            doctor.Especialidad_Id,
            doctor.consultorio,
            doctor.correo
        ],
        (err, result) => {
            if (err) {callback(err);}
            const Id_Doctor = (<OkPacket>result).insertId;
            callback(null, Id_Doctor);
        }
    );
};

export const findAll = (callback: Function) => {
    const queryString = 'SELECT * FROM apisalud.doctor;';
  
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      const rows = <RowDataPacket[]>result;
      const doctores: BasicDoctor[] = [];
  
      rows.forEach(row => {
        const doctor: Doctor = {
          Id_Doctor: row.Id_Doctor,
          nombre: row.Nombre,
          apellido: row.Apellido,
          Especialidad_Id: row.Especialidad_Id,
          consultorio: row.Consultorio,
          correo: row.Correo
        };
        doctores.push(doctor);
      });
  
      callback(null, doctores);
    });
  };