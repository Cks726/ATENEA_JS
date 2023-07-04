import { BasicEspecialidades, Especialidad } from "../models/especialidad";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (especialidad: Especialidad, callback: Function ) =>{
    const queryString = 'INSERT INTO especialidad (Id_Especialidad, nombre) VALUES (?,?)';
    db.query (queryString,
        [
            especialidad.Id_Especialidad,
            especialidad.nombre
        ],
        (err, result) => {
            if (err) {callback(err);}
            const Id_Especialidad = (<OkPacket>result).insertId;
            callback(null, Id_Especialidad);
        }
        )
}

export const findAll = (callback: Function) => {
    const queryString = 'SELECT * FROM apisalud.especialidad;';
  
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      const rows = <RowDataPacket[]>result;
      const especialidades: BasicEspecialidades[] = [];
  
      rows.forEach(row => {
        const especialidad: Especialidad = {
          Id_Especialidad: row.Id_Especialidad,
          nombre: row.Nombre,
        };
        especialidades.push(especialidad);
      });
  
      callback(null, especialidades);
    });
  };