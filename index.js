require('dotenv').config()
const express = require('express')
var cors = require('cors')
const { dbConnection } = require('./database/config')

//Crear el servidor express
const app = express()

//Configurar CORS
app.use(cors())

//Base de datos
dbConnection()

console.log(process.env)

//Rutas
app.get('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'Hola Mundo'
  })
})

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en puerto ' + process.env.PORT)
})
