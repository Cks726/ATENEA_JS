const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    cedula:{
        type: String,
        required: true
    },
    fecha_nacimiento:{
        type: Date,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('paciente', pacienteSchema);