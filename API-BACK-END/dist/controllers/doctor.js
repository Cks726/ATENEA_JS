"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.create = void 0;
const db_1 = require("../db");
const create = (doctor, callback) => {
    const queryString = 'INSERT INTO doctor (Id_Doctor, nombre, apellido, Especialidad_Id, consultorio, correo) VALUES (?, ?, ?, ?, ?, ?)';
    db_1.db.query(queryString, [doctor.Id_Doctor,
        doctor.nombre,
        doctor.apellido,
        doctor.Especialidad_Id,
        doctor.consultorio,
        doctor.correo
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const Id_Doctor = result.insertId;
        callback(null, Id_Doctor);
    });
};
exports.create = create;
const findAll = (callback) => {
    const queryString = 'SELECT * FROM apisalud.doctor;';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        const rows = result;
        const doctores = [];
        rows.forEach(row => {
            const doctor = {
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
exports.findAll = findAll;
