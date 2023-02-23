require('dotenv').config() //funcionen las varaibles de entorno
const express = require('express') //declara paquete express levnata el servicio web
const cors = require('cors') // instnaica cors
const dbConnect = require('./config/mongo')
const app = express() //la app utiliza cors

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

const port = process.env.PORT || 3000  //referencia el puerto

//invocacion de rutas
//TODO localhost/api/__________
app.use('/api', require("./routes"))

app.listen(port , () => {
    console.log("http://localHost:" + port)
})

dbConnect()