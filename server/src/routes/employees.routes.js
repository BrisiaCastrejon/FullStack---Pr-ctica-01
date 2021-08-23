/*
! Archivo de rutas
*/
const {Router} = require('express');
const router = Router();

const employeedCtrl = require('../controllers/employees.controller');

/*
* Usualmente se registran 5 rutas --> CRUD
    !CREATE
    !READ
    !UPDATE
    !DELETE
*/
/**
 FORMA TRADICIONAL DE AGREGAR RUTAS 
router.get('/employees', employeedCtrl.getEmployees);
router.post('/employees', employeedCtrl.createEmployee);
router.get('/employees', employeedCtrl.getEmployees);
 */

//OTRA FORMA DE AGREGAR RUTAS (CON PREFIJO  EN EL APP.JS) --> PARA LOS PARAMETROS SOLO SE AGREGAN (:id) => router.get('/:id', employeedCtrl.getEmployees);

router.get('/', employeedCtrl.getEmployees);
router.post('/', employeedCtrl.createEmployee);
router.get('/:id', employeedCtrl.getEmployee);
router.put('/:id', employeedCtrl.editEmployee);
router.delete('/:id', employeedCtrl.deleteEmployee);


module.exports =  router