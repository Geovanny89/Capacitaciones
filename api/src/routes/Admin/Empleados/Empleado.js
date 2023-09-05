const express = require('express')
const router = express();
const EmpleadosSchema = require('../../../database/Empleados')
const EmpresaSchema = require('../../../database/Empresa')

router.get('/empleados', async (req, res) => {
    try {
        const empleado = await EmpleadosSchema.find().populate('empresa').populate('direcciones')
        
        res.status(200).send(empleado)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }

});
router.get('/empleados/name', async (req, res) => {
    try {
        const {name} =req.query
        const regex = new RegExp(name, 'i');
        const empleado = await EmpleadosSchema.find({name:regex}).populate('empresa').populate('direcciones')
        if(empleado.length ===0){
            res.status(404).send("No existe empleado con ese nombre")
            return
        }
        
        res.status(200).send(empleado)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }

});

router.get('/empleado/:id', async (req, res) => {
    try {
        const { id } = req.params
        const empleado = await EmpleadosSchema.findById(id)
        if (!empleado) {
            res.status(404).send("No existe empleado")
        }
        res.status(200).send(empleado)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }

});


router.post('/crear/empleado', async (req, res) => {
    try {
        const { id, name, lastname, post, area, email, empresaId } = req.body;

        // Verificar que todos los campos estén completos
        if (!id || !name || !lastname || !post || !area || !email || !empresaId) {
            res.status(400).send("Todos los campos deben estar completos");
            return;
        }
        const existeEmpleado = await EmpleadosSchema.findOne({ id })
        if (existeEmpleado) {
            res.status(409).send("El empleado ya existe"); // 409 indica conflicto
            return;
        }
        // Verificar si la empresa con el ID proporcionado existe
        const empresa = await EmpresaSchema.findById(empresaId);
        if (!empresa) {
            res.status(404).send("No existe empresa");
            return;
        }

        // Crear una nueva instancia de EmpleadosSchema con los datos y la referencia a la empresa
        const empleado = new EmpleadosSchema({
            id,
            name,
            lastname,
            post,
            area,
            email,
            empresa: empresa, // Asignar la instancia de la empresa
        });

        // Guardar el empleado en la base de datos
        await empleado.save();

        res.status(201).send(empleado); // 201 indica que se ha creado con éxito
    } catch (error) {
        console.error(error);
        res.status(500).send("Error de Servidor");
    }
});


router.put('/empleado/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const empleado = await EmpleadosSchema.findById(_id);

        if (!empleado) {
            res.status(404).send("No existe Empleado");
            return;
        }

        // Obtener los campos que se desean actualizar del cuerpo de la solicitud
        const { name, lastname, post, area, email, empresa } = req.body;

        // Crear un objeto de actualización con los campos que se desean actualizar
        const updateFields = {};
        if (name) updateFields.name = name;
        if (lastname) updateFields.lastname = lastname;
        if (post) updateFields.post = post;
        if (area) updateFields.area = area;
        if (email) updateFields.email = email;
        if (empresa) updateFields.empresa = empresa;

        // Realizar la actualización
        const updateEmpleado = await EmpleadosSchema.findByIdAndUpdate(
            _id,
            updateFields,
            { new: true }
        );

        res.status(200).send(updateEmpleado);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de servidor");
    }
});

router.delete('/empleado/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const empleado = await EmpleadosSchema.findByIdAndDelete(id);
        if (!empleado) {
            res.status(404).send("No existe empleado")
            return
        }
        res.status(200).send("Empleado eliminado")
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de Servidor")
    }
})
module.exports = router 