const mongoose = require('mongoose')
mongoose.set("strictQuery", false);


const dbConnect = () =>{
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err,res)=>{
        if(!err){
            console.log('CONEXCION CORRECTA')
        }else{
            console.log('ERROR DE CONECCION')
        }

    })
}


module.exports = dbConnect


