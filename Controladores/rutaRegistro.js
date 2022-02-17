const Registro = require('../Modelos/registroUsuarioBD')
const bcrypt = require('bcryptjs')


function registroGet (req,res){
    res.json({
        mensaje: "Hola desde ruta controlador get"
    })
    res.end()
}

//Ruta para añadir usuario nuevo
async function registroPost (req,res){
    
    //Verificar correo duplicado
    const {nombre, correo, contrasena, telefono} = req.body
    //Encriptar contraseña
    const salto = bcrypt.genSaltSync()
    

    //Verificamos en la base de datos
    const validarCorreo = await Registro.findOne({ correo })
    //comprobamos
    if (validarCorreo) {
        const error = new Error('El correo ya está registrado')
        return res.status(400).json({
            mensaje: "El correo ingresado ya se encuentra registrado"
        })
    }

    try {
        const usuario =  new Registro({nombre, correo, contrasena, telefono})
        usuario.contrasena = bcrypt.hashSync(contrasena, salto)
    
        const usuarioGuardado = await usuario.save()
    
        console.log(usuarioGuardado)
    
        res.end()
    } catch (error) {
        console.log(error)
    }

    
}



function registroPut (req,res){
    res.json({
        mensaje: "Hola desde ruta controlador put"
    })
    res.end()
}


function registroPatch (req,res){
    res.json({
        mensaje: "Hola desde ruta controlador patch"
    })
    res.end()
}


function registroDelete (req,res){
    res.json({
        mensaje: "Hola desde ruta controlador delete"
    })
    res.end()
}



module.exports = {
    registroGet,
    registroPost,
    registroPut,
    registroPatch,
    registroDelete
}