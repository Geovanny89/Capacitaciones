require('dotenv').config();
const cors = require('cors')
const express = require('express')


const app= express();
const router = require('./src/index')

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza con la URL de tu aplicación React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }));

app.get('/apiv/saludo', (req, res) => {
    res.send('Bienvenido')
});


const PORT = process.env.PORT;

app.use('/apiv',router)
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto  ${PORT}`)
})

require('./src/db')