const express = require('express');
const apiRouter = require('../index.js');
const router = express.Router();
const doctorSchema = require('../models/squemaDoctores.js');


//CREAR DOCTORES
router.post('/created', (req, res) => {
    const { nombreDoctor, apellidoDoctor, cedulaDoctor, consultorio, email, especialidades } = req.body;

    const doctor = new doctorSchema({
        nombreDoctor,
        apellidoDoctor,
        cedulaDoctor,
        consultorio,
        email,
        especialidades
    });

    doctor.save()
        .then((data) => {
            res.status(200).json({ success: true, message: "Doctor creado exitosamente", data });
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: "Error al crear el doctor", error });
        });
});

//OBTENER DOCTORES
router.get('/doctores', (req, res) => {
    
    res.json({ message: "Obtener doctores" });
  });



module.exports = router;