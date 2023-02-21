require('dotenv').config() //funcionen las varaibles de entorno
const express = require('express') //declara paquete express levnata el servicio web
const cors = require('cors') // instnaica cors
const dbConnect = require('./config/mongo')
const app = express() //la app utiliza cors

app.use(cors())

const port = process.env.PORT || 3000  //referencia el puerto


app.listen(port , () => {
    console.log("http://localHost:" + port)
})

dbConnect()