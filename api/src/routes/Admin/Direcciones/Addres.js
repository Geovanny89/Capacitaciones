const express = require("express");
const router = express();
const DirSchema = require("../../../database/Direcciones")
const EmpleadosSchema = require('../../../database/Empleados')

router.get('/adres', async (req, res)=>{
    try {
        const empleado = await DirSchema.find().populate('empleado')
        if(!empleado){
            res.status(404).send("No existen direcciones")
        }
        res.status(200).send(empleado)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error en el servidor")
    }
});
router.post('/create/adres/:_id', async (req,res)=>{
   try {
    const {_id}= req.params
    const empleado = await EmpleadosSchema.findById(_id);
    
    if(!empleado){
        res.status(404).send("No existen ningun empleado con ese id")
        return
    }

    const {direccion,barrio,ciudad,departamento} = req.body;
    
    if(!direccion ||!barrio || !ciudad || !departamento){
        res.status(404).send("No puede faltar ningun campo")
    }
    const adres = await DirSchema({
        direccion,barrio,ciudad,departamento,empleado:empleado._id
    });
    adres.save()
    res.status(200).send(adres)
   } catch (error) {
    console.log(error)
    res.status(500).send("Error de servidor")
   }
});
router.put('/adress/update/:id', async(req,res)=>{
    try {
        const {id}= req.params;
        const adres = await DirSchema.findById(id)
        if(!adres){
            res.status(404).send("No existe direccion ")
            return 
        }
        const {direccion, barrio, ciudad, departamento}= req.body;
        const updateFields = {};
        if(direccion) updateFields.direccion = direccion;
        if(barrio) updateFields.barrio= barrio;
        if(ciudad) updateFields.ciudad=ciudad;
        if(departamento) updateFields.departamento= departamento;
        const updateDireccion = await DirSchema.findByIdAndUpdate(
            id,
            updateFields,
            {new:true}
        )
        res.status(200).send(updateDireccion)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }
});

router.delete('/adres/delete/:id', async (req, res)=>{
    try {
        const {id}= req.params
    const adres = await DirSchema.findByIdAndDelete(id);
    if(!adres){
        res.status(404).send("No existe direccion con ese Id")
        return
    }
    res.status(200).send("Dirección eliminada")
    } catch (error) {
        console.log(error)
        res.status(500).send("error de servidor")
    }
})


module.exports= router