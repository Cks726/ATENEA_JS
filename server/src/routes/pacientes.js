const express = require('express');
const apiRouter = require('../index.js');
const router = express.Router();
const pacienteSchema = require('../models/squemaPacientes.js');


//CREAR PACIENTES
router.post('/', (req, res) =>{
    const paciente= pacienteSchema(req.body);
    res.json({message:"paciente creado"});
})

//OBTENER PACIENTES
router.get('/', (req, res) => {
    // Lógica para obtener los usuarios
    res.json({ message: "Obtener pacientes" });
  });



module.exports = router;