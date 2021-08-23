/*
? Logica del servidor
*/
const express = require('express');
const morgan = require('morgan');
const app = express();

// SI NO HAY UN PUERTO ASIGNADO TOMA EL 400 (environment variables)
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
//se configura para que interprete json y formularios HTML
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Aquí se agrega el prefijo 
app.use('/api/employees', require('./routes/employees.routes'))

module.exports = app;