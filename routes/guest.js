let Gallery = require('../database/gallery');
let Product = require('../database/product');
let Cat = require('../database/cat');
module.exports = (express)=>{
    let router = express.Router();
    router.get('/cats',(req,res)=>{
        Cat.all()
        .then(cat=>res.json({success:true,data:cat}))
        .catch(err=>res.json({success:false,data:err}))
   });
   router.get('/product/:start/:count',(req,res)=>{
    let start = req.param('start'); // string
    let count = req.param('count'); // string change number
    Product.paginate(Number(start),Number(count))
    .then(product=>{
         res.json({success:true,data:product})
    })
    .catch(err=>res.json({success:false,data:err}))
});
   router.get('/gallery/all',(req,res)=>{
    Gallery.all()
    .then(img=>res.json({success:true,data:img}))
    .catch(err=>res.json({success:false,data:err}))
   });
    router.get('/home',(req,res)=>{
        res.send('Guest Home Route');
    })
    return router;
}