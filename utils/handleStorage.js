const multer =  require('multer')
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        const pathStorage = `${__dirname}/../storage`
        cb(null,pathStorage)
    },
    filename:function(req,file,cb){
        //TODO: .pd .png .mp4 formato

        const ext = file.originalname.split('.').pop(); //TODO ["name", "png"]
        const filename = `file-${Date.now()}.${ext}` //TODO 124124124124.mp3
        cb(null, filename)

    }
});

const uploadMiddleware = multer({storage})


module.exports = uploadMiddleware