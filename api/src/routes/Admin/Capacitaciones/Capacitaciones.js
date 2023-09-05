const express = require('express');
const router = express.Router();
const multer = require('multer');
const CapacitacionesSchema = require('../../../database/Capacitaciones'); // Asegúrate de que la ruta del modelo sea correcta

// Configuración de multer para almacenar archivos
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET /api/capacitaciones

router.get('/AllCapacitaciones', async (req, res) => {
    try {
        // Obtener todas las capacitaciones de la base de datos
        const capacitaciones = await CapacitacionesSchema.find();

        if (!capacitaciones || capacitaciones.length === 0) {
            res.status(404).send('No existen capacitaciones.');
            return;
        }

        res.status(200).send(capacitaciones);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las capacitaciones.');
    }
});
router.get('/capacitaciones/name', async(req,res)=>{
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
})


router.post('/capacitaciones', upload.single('archivo'), async (req, res) => {
    try {
        const { name, tipo, description } = req.body;

        // Verificar si se proporcionan el nombre y el tipo
        if (!name || !tipo) {
            res.status(400).send('El nombre y el tipo son obligatorios.');
            return;
        }

        // Crear un nuevo documento en la colección "Capacitaciones" con el nombre, tipo, archivo y descripción
        const nuevaCapacitacion = new CapacitacionesSchema({
            name,
            tipo,
            archivo: req.file.buffer, // Almacenamos el archivo como buffer
            description,
        });

        await nuevaCapacitacion.save();
        res.status(201).send('Archivo de capacitación subido exitosamente.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al subir el archivo de capacitación.');
    }
});
// PUT /api/capacitaciones/:id (donde :id es el identificador de la capacitación que deseas actualizar)

router.put('/capacitaciones/:id', upload.single('archivo'), async (req, res) => {
    try {
        const { name, tipo, description } = req.body;
        const { id } = req.params;

        // Verificar si se proporcionan el nombre y el tipo
        if (!name || !tipo) {
            res.status(400).send('El nombre y el tipo son obligatorios.');
            return;
        }

        // Buscar la capacitación por su ID
        const capacitacion = await CapacitacionesSchema.findById(id);

        if (!capacitacion) {
            res.status(404).send('La capacitación no existe.');
            return;
        }

        // Actualizar los detalles de la capacitación
        capacitacion.name = name;
        capacitacion.tipo = tipo;
        capacitacion.description = description;

        // Si se proporciona un nuevo archivo, actualizarlo
        if (req.file) {
            capacitacion.archivo = req.file.buffer;
        }

        await capacitacion.save();
        res.status(200).send('Capacitación actualizada exitosamente.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar la capacitación.');
    }
});
// DELETE /api/capacitaciones/:id (donde :id es el identificador de la capacitación que deseas eliminar)

router.delete('/deletecapacitaciones/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar la capacitación por su ID
        const capacitacion = await CapacitacionesSchema.findByIdAndDelete(id);

        if (!capacitacion) {
            res.status(404).send('La capacitación no existe.');
            return;
        }

        // Eliminar la capacitación
        
        res.status(200).send('Capacitación eliminada exitosamente.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar la capacitación.');
    }
});

module.exports = router;
