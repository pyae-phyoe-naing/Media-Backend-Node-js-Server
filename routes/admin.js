let multer  = require('multer');
var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, './asset/upload')
     },
     filename: function (req, file, cb) {
       cb(null, Date.now() +'_'+ file.originalname)
     }
   })
var upload = multer({ storage: storage });
module.exports = (express,passport) => {
     let router = express.Router();
     // passport.authenticate('jwt', { session: false })
      router.get('/image/upload',upload.single('image'),(req,res,next)=>{
           res.send(req.file.filename)
      });
     return router;
}