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
let Gallery = require('../database/gallery');
module.exports = (express,passport) => {
     let router = express.Router();
      
      router.get('/image/upload',passport.authenticate('jwt', { session: false }),upload.single('image'),(req,res,next)=>{
           let obj = {name:req.file.filename};                      
           Gallery.save(obj)
           .then(img=>{
             res.json({success:true,data:img});
           })
           .catch(err=> res.json({success:false,data:'image save fail!'}));
          
      });
     return router;
}