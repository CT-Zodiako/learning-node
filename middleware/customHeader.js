const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.API_KEY
        if( apiKey == "tovar"){
            next()
        }else{
            res.status(403)
        res.send({error:"APIKEY NO"})
        }
        
    } catch (e) {
        res.status(403)
        res.send({error:"ALGO PASO EN EL CUSOTM HEADER"})
    }
}



module.exports = customHeader