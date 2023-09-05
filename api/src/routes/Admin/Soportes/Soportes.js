const express= require('express');
const router = express();
const multer = require('multer');
const SoportesSchema = require('../../../database/Soportes');
const EmpresaSchema = require('../../../database/Empresa');

const storage = multer.memoryStorage(); // Almacenar el archivo en memoria
const upload = multer({ storage });

router.get('/AllSoportes',async (req,res)=>{
    try {
        const soportes = await SoportesSchema.find().populate("empresa");

        if(!soportes){
            res.status(404).send("No existen soportes")
            return
        }
        res.status(200).send(soportes)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }
});
router.get('/soportes/name',async (req,res)=>{
  try {
    const {name} = req.query
    const regex= new RegExp(name, 'i');
      const soportes = await SoportesSchema.find({name:regex}).populate("empresa");

      if(soportes.length ===0){
          res.status(404).send("No existen soportes")
          return
      }
      res.status(200).send(soportes)
  } catch (error) {
      console.log(error)
      res.status(500).send("Error de servidor")
  }
});

router.post('/soportes', upload.single('archivo'),async(req,res)=>{
    try {
        // Crear un nuevo documento en la colección "Soportes"
        const { name, tipo,empresaId} = req.body;
        console.log(req.body)

        // Verificar si se proporcionan el nombre y el tipo
        if (!name || !tipo || !empresaId) {
          res.status(400).send('El nombre y el tipo son obligatorios.');
          return;
        }
        const empresa = await EmpresaSchema.findById(empresaId);
        console.log(empresa)
        if (!empresa) {
            res.status(404).send('La empresa no existe.');
            return;
        }
    
        // Crear un nuevo documento en la colección "Soportes" con el nombre y el tipo
        const nuevoSoporte = new SoportesSchema({
          name,
          tipo,
          empresa:empresaId,
          documento: req.file.buffer,
        });
    
        await nuevoSoporte.save();
        res.status(201).send('Archivo subido exitosamente.');
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al subir el archivo.');
      }
})
// router.post('/soportes', upload.single('archivo'), async (req, res) => {
//     try {
//         // Crear un nuevo documento en la colección "Soportes"
//         const { name, tipo, empresaId } = req.body;

//         // Verificar si se proporcionan el nombre y el tipo
//         if (!name || !tipo || !empresaId) {
//             res.status(400).send('El nombre, el tipo y la empresa son obligatorios.');
//             return;
//         }

//         const empresa = await EmpresaSchema.findById(empresaId);

//         if (!empresa) {
//             res.status(404).send('La empresa no existe.');
//             return;
//         }

//         // Crear un nuevo documento en la colección "Soportes" con el nombre, el tipo y la referencia a la empresa
//         const nuevoSoporte = new SoportesSchema({
//             name,
//             tipo,
//             empresa: empresaId, // Cambia empresaId a empresa
//             documento: req.file.buffer,
//         });

//         await nuevoSoporte.save();
//         res.status(201).send('Archivo subido exitosamente.');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error al subir el archivo.');
//     }
// })


module.exports= router;
