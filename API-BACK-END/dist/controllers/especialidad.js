"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.create = void 0;
const db_1 = require("../db");
const create = (especialidad, callback) => {
    const queryString = 'INSERT INTO especialidad (Id_Especialidad, nombre) VALUES (?,?)';
    db_1.db.query(queryString, [
        especialidad.Id_Especialidad,
        especialidad.nombre
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const Id_Especialidad = result.insertId;
        callback(null, Id_Especialidad);
    });
};
exports.create = create;
const findAll = (callback) => {
    const queryString = 'SELECT * FROM apisalud.especialidad;';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        const rows = result;
        const especialidades = [];
        rows.forEach(row => {
            const especialidad = {
                Id_Especialidad: row.Id_Especialidad,
                nombre: row.Nombre,
            };
            especialidades.push(especialidad);
        });
        callback(null, especialidades);
    });
};
exports.findAll = findAll;
