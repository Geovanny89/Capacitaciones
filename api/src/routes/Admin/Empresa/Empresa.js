const express = require('express');
const router = express();
const EmpresaSchema = require('../../../database/Empresa')


router.get('/empresa',async(req, res)=> {
    try {
        const empresas = await EmpresaSchema.find()
        if(!empresas){
            res.status(404).send("No Exiten empresas")
        }
        res.status(200).send(empresas);
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor ")
    }
});
router.get('/detail/empresa/:id',async(req, res)=> {
    try {
        const {id} = req.params
        const empresas = await EmpresaSchema.findById(id)
        if(!empresas){
            res.status(404).send("No Exiten empresas")
        }
        res.status(200).send(empresas);
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor ")
    }
});
router.get('/empresa/name', async(req, res)=>{
    try {
        const {name}= req.query
        const regex = new RegExp(name, 'i'); // Expresión regular sin distinción entre mayúsculas y minúsculas

        const empresa = await EmpresaSchema.find({name: regex})

        if(empresa.length === 0){
            res.status(404).send("No existe empresa por el nombre proporcionado")
            return
        }       
        res.status(200).send(empresa)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }
})
router.post('/empresa/crear',async (req,res) =>{
    try {
        const {name,nit,email,phone} = req.body;
        if(!name || !nit || !email || !phone){
            res.status(404).send('No puede faltar Ningun dato')
            return
            
        }
        const newEmpresa = await EmpresaSchema(req.body);
        res.status(200).send(newEmpresa)
        newEmpresa.save();
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }
});


router.put('/empresa/update/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const empresa = await EmpresaSchema.findById(id)
        if(!empresa){
            res.status(404).send("No existe empresa para ese Id")
            return
        }
        const {name,nit,email,phone} = req.body;
        const updateEmpresa = await EmpresaSchema.findByIdAndUpdate(id,{
            name,nit,email,phone
        },{name:true})
        res.status(200).send(updateEmpresa)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error de servidor');
    }
});
router.delete('/empresa/:id', async (req,res)=>{
    try {
        const {id}= req.params;
        const empresa = await EmpresaSchema.findByIdAndDelete(id);
        if(!empresa){
            res.status(400).send("No existe Empresa asociada a ese Id")
            return
        }
        res.status(200).send("Empresa Eliminada Con exito ")
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor ")
    }
})

module.exports = router;