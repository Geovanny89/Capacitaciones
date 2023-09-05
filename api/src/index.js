const express = require('express')

const router = express();

const RouterEmpresa= require('./routes/Admin/Empresa/Empresa');
const RouterEmpleados = require('./routes/Admin/Empleados/Empleado');
const RouterDirecciones = require('./routes/Admin/Direcciones/Addres');
const RouterSoportes = require('./routes/Admin/Soportes/Soportes');
const RouterCapacitaciones = require('./routes/Admin/Capacitaciones/Capacitaciones');



router.use('/', RouterEmpresa);
router.use('/', RouterEmpleados);
router.use('/', RouterDirecciones)
router.use('/', RouterSoportes)
router.use('/',RouterCapacitaciones)

module.exports=router;