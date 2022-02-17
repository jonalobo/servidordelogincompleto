const { Schema, model } = require('mongoose')

const registroSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contrasena: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
  },
  //No olvidar que este objeto practicamente esta fuera del primer objeto de modelo
  {
      versionKey: false
  }
);

module.exports = model( 'Registro', registroSchema )