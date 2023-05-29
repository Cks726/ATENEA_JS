const express = require('express'); //llamar al módulo express
const mongoose = require('mongoose');
require('dotenv').config(); //para proteger el usuario y contraseña de la conexión de mongo se usa una variable customizada, con dotenv

//USO EXPRESS EN LA APP
const app =express();//uso del método en la aplicación


const port = process.env.PORT || 9000; //valor del puerto: se pasa una variable customizada de nodejs llamada process.env.PORT para que nos ejecute el proyecto en el puerto predeterminado o si es el caso, en el 9000

//CONEXIÓN MONGO ATLAS AL PROYECTO
mongoose.connect( //se usa la variable env propia y se genera una promesa para verificar la conexión
    process.env.MONGODB_URI)
    .then(()=>
        console.log("bd de mongo conectada"))
    .catch((error) => console.error(error));




//USO DEL PUERTO EN EL LLAMADO DE LA APP
app.listen(port, () =>   //se llama la app con el método propio listen y se verifica que está siendo ejecutado con el mensaje
console.log("levantado en puerto:", port)); 
