const mongoose = require('mongoose');

const dbconection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Coneccion exitosa a la base de datos practica');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la conneccion a la base de datos practica')

    }
}

module.exports = {
    dbconection
}