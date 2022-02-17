const express = require("express");
const conectarBD = require("../BaseDeDatos/configuracion");
const { body, validationResult } = require('express-validator')

const { registroGet, registroPost, registroDelete, registroPut } = require('../Controladores/rutaRegistro');
const rutaRegistro = require("../Rutas/rutas-registro");

require('dotenv').config()


class Servidor {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8080
        //Llamo la base de datos
        conectarBD()
        //Llamo a los midlewares
        this.middlewares()
    }

    //Middlewares
    middlewares(){
        this.app.use(express.json())
        //ruta registro de usuarios
        this.app.use('/api/registrar', rutaRegistro)
        //ruta ingreso usuarios
        /* this.app.use('/api/ingresar', rutaIngresar) */
    }

    //listen

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
} 

module.exports = Servidor