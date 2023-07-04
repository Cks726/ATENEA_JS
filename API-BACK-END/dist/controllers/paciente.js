"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.create = void 0;
const db_1 = require("../db");
const create = (paciente, callback) => {
    const queryString = 'INSERT INTO pacientes (Id_Paciente, nombre, apellido, edad, telefono) VALUES (?, ?, ?, ?, ?)';
    db_1.db.query(queryString, [
        paciente.Id_Paciente,
        paciente.nombre,
        paciente.apellido,
        paciente.edad,
        paciente.telefono
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const Id_Paciente = result.insertId;
        callback(null, Id_Paciente);
    });
};
exports.create = create;
const findAll = (callback) => {
    const queryString = 'SELECT * FROM apisalud.pacientes;';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        const rows = result;
        const pacientes = [];
        rows.forEach(row => {
            const paciente = {
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
exports.findAll = findAll;
