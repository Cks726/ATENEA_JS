import { Paciente,BasicPaciente } from "../models/paciente";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (paciente: Paciente, callback: Function) => {
    const queryString = 'INSERT INTO pacientes (Id_Paciente, nombre, apellido, edad, telefono) VALUES (?, ?, ?, ?, ?)';

    db.query(
        queryString,
        [  
            paciente.Id_Paciente,
            paciente.nombre,
            paciente.apellido,
            paciente.edad,
            paciente.telefono
        ],
        (err, result) => {
            if (err) {callback(err);}
            const Id_Paciente = (<OkPacket>result).insertId;
            callback(null, Id_Paciente);
        }
    );
};

export const findAll = (callback: Function) => {
    const queryString = 'SELECT * FROM apisalud.pacientes;';
  
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      const rows = <RowDataPacket[]>result;
      const pacientes: Paciente[] = [];
  
      rows.forEach(row => {
        const paciente: Paciente = {
          Id_Paciente: row.Id_Paciente,
          nombre: row.Nombre,
          apellido: row.Apellido,
          edad: row.Edad,
          telefono: row.Telefono
        };
        pacientes.push(paciente);
      });
  
      callback(null, pacientes);
    });
  };
  




