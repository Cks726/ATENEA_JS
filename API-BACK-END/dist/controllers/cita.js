"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.create = void 0;
const db_1 = require("../db");
const create = (cita, callback) => {
    const queryString = "INSERT INTO cita(Paciente_Id, Especialidad_Id) value(?, ?);";
    db_1.db.query(queryString, [
        cita.Paciente_Id,
        cita.Especialidad_Id
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const Id_Cita = result.insertId;
        callback(null, Id_Cita);
    });
};
exports.create = create;
const findAll = (callback) => {
    const queryString = 'SELECT * FROM apisalud.cita;';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        const rows = result;
        const citas = [];
        rows.forEach(row => {
            const cita = {
                Id_Cita: row.Id_Cita,
                Paciente_Id: row.Paciente_Id,
                Especialidad_Id: row.Especialidad_Id
            };
            citas.push(cita);
        });
        callback(null, citas);
    });
};
exports.findAll = findAll;
