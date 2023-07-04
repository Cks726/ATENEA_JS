import { BasicCita, Cita} from "../models/cita";
import { db } from "../db"
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (cita: Cita, callback: Function) => {
    const queryString = "INSERT INTO cita(Paciente_Id, Especialidad_Id) value(?, ?);";

    db.query(
        queryString,
        [
            cita.Paciente_Id,
            cita.Especialidad_Id
        ],
        (err, result) => {
            if (err) { callback(err); }

            const Id_Cita = (<OkPacket>result).insertId;
            callback(null, Id_Cita);
        }
    );
};

export const findAll = (callback: Function) => {
    const queryString = 'SELECT * FROM apisalud.cita;';
  
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      const rows = <RowDataPacket[]>result;
      const citas: BasicCita[] = [];
  
      rows.forEach(row => {
        const cita: Cita = {
          Id_Cita: row.Id_Cita,
          Paciente_Id: row.Paciente_Id,
          Especialidad_Id: row.Especialidad_Id
        };
        citas.push(cita);
      });
  
      callback(null, citas);
    });
  };