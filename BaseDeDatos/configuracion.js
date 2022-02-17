const mongoose = require('mongoose');


const conectarBD = async()=>{
    try {

        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`Base de datos en linea ${url}`)


    } catch (error) {

        console.log(`error: ${error.message}`)

    }
}

module.exports = conectarBD