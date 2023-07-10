const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    nombreDoctor:{
        type: String,
        required: true
    },
    apellidoDoctor:{
        type: String,
        required: true
    },
    cedulaDoctor:{
        type: String,
        required: true
    },
    consultorio:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    especialidades: {
        type: [String], 
        required: true,
        enum: [
            'Medicina General',
            'Cardiología',
            'Medicina interna',
            'Dermatología',
            'Rehabilitación física',
            'Psicología',
            'Odontología',
            'Radiología'
        ]
    }
});

module.exports = mongoose.model('doctores', doctorSchema); //doctores será el nombre de la "tabla"