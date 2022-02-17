const { Router } = require('express')
const { check } = require('express-validator')
const { registroGet, registroPost, registroPut, registroDelete, registroPatch } = require('../Controladores/rutaRegistro')
const validaciones = require('../Middlewares/validacionesDeCampos')

const rutaRegistro = Router()

rutaRegistro.get('/', registroGet)
rutaRegistro.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo es incorrecto').isEmail(),
    check('contrasena', 'la contraseña debe ser como mínimo 8 carácteres').isLength({min:8}),
    validaciones
], registroPost)
rutaRegistro.put('/', registroPut)
rutaRegistro.patch('/', registroPatch)
rutaRegistro.delete('/', registroDelete)

module.exports = rutaRegistro