const express = require('express');
const router = express();
const CapacitacionesSchema = require('../../../database/Capacitaciones')
const EmpleadosSchema = require('../../../database/Empleados');
const ProgresoSchema = require('../../../database/Progeso');


router.get('/user/capacitaciones', async(req,res)=>{
    try {
        const capacitaciones = await CapacitacionesSchema.find();
        if(!capacitaciones){
            res.status.send("No existen capacitaciones")
            return 
        }
        res.status(200).send(capacitaciones)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }
});
router.get('/user/capacitaciones/name', async(req,res)=>{
    try {
        const {name} =req.query
        const regex = new RegExp(name, 'i');
    const capacitacion = await CapacitacionesSchema.find({name:regex})
    if(!capacitacion){
        res.status(404).send("No existe capacitacion con ese nombre")
    }
    res.status(200).send(capacitacion)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }
});
router.get('/user/capacitaciones/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        // Encuentra el usuario por su ID y asegúrate de que exista
        const usuario = await EmpleadosSchema.findById(userId);
        if (!usuario) {
            return res.status(404).send("Usuario no encontrado");
        }

        // Encuentra las capacitaciones para el usuario
        const capacitaciones = await CapacitacionesSchema.find();

        // Encuentra el progreso de capacitación para ese usuario
        const progreso = usuario.trainingProgress;

        // Combinar las capacitaciones y el progreso para el usuario
        const capacitacionesConProgreso = capacitaciones.map((capacitacion) => {
            const progresoCapacitacion = progreso.find(
                (item) => item.training.toString() === capacitacion._id.toString()
            );
            return {
                ...capacitacion.toObject(),
                progreso: progresoCapacitacion ? progresoCapacitacion.progress : 0,
            };
        });

        res.status(200).json(capacitacionesConProgreso);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de servidor");
    }
});
router.get('/user/progreso/capacitaciones/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        // Encuentra el usuario por su ID y asegúrate de que exista
        const usuario = await EmpleadosSchema.findById(userId);
        if (!usuario) {
            return res.status(404).send("Usuario no encontrado");
        }

        // Encuentra el progreso de capacitación para ese usuario
        const progreso = await ProgresoSchema.find({ employee: userId });

        // Combinar las capacitaciones y el progreso para el usuario
        const capacitacionesConProgreso = [];

        for (const progressItem of progreso) {
            const capacitacion = await CapacitacionesSchema.findById(progressItem.capacitacion);
            if (capacitacion) {
                capacitacionesConProgreso.push({
                    ...capacitacion.toObject(),
                    progreso: progressItem.progress,
                });
            }
        }

        res.status(200).json(capacitacionesConProgreso);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de servidor");
    }
});


module.exports= router;
