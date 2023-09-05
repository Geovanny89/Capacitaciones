require('dotenv').config();
const express = require('express')


const app= express();
const router = require('./src/index')


app.get('/apiv/saludo', (req, res) => {
    res.send('Bienvenido')
});


const PORT = process.env.PORT;

app.use(express.json());
app.use('/apiv',router)
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto  ${PORT}`)
})

require('./src/db')