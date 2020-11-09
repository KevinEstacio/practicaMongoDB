const express = require('express');
const { dbconection } = require('./database/config')
require('dotenv').config();
const cors = require('cors');
//string de coneccion

//YpCiEG4z0Doh3byl
//userEstacio
//mongodb+srv://userNontol:y5XQJ7BaQBbpNV8@cluster0.tbqmr.mongodb.net/test?authSource=admin&replicaSet=atlas-ik8p8y-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
// y5XQJ7BaQBbpNV
//mongodb+srv://<username>:<password>@cluster0.tbqmr.mongodb.net/test

const server = express();

server.use(cors());


server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio REST Practica'
    })
});

dbconection();

//console.log(process.env)

//despliegue del servidor
server.listen(process.env.PORT, () => {
    console.log('el servidor se esta ejecutando en el pueto: ' + process.env.PORT)
});