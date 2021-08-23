/*
? Logica del servidor
*/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// SI NO HAY UN PUERTO ASIGNADO TOMA EL 400 (environment variables)
app.set('port', process.env.PORT || 4000);
//se agrega configuración para aceptar peticiones desde otros servidores con CORS
// forma generica => app.use(cors());
// forma especifica en el caso de Angular  => app.use(cors({origin: "http://localhost:4200"}));

app.use(cors());
app.use(morgan('dev'));
//se configura para que interprete json y formularios HTML
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Aquí se agrega el prefijo 
app.use('/api/employees', require('./routes/employees.routes'))

module.exports = app;