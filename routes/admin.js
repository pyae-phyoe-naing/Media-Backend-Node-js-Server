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
let Product = require('../database/product');
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
      router.get('/product/paginate/:start/:count',passport.authenticate('jwt', { session: false }),(req,res)=>{
          let start = req.param('start'); // string
          let count = req.param('count'); // string change number
          Product.paginate(Number(start),Number(count))
          .then(product=>{
               res.json({success:true,data:product})
          })
          .catch(err=>res.json({success:false,data:err}))
      });
     return router;
}