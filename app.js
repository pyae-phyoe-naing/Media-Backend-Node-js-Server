require('dotenv').config();
let express = require('express'),
        app = express();
 let product = require('./database/product');

// **** Create Product
// product.save({
//     'cat_id':1,
//         'name':'Honda-Fit',
//         'price':'3000',
//         'image':'fit.png',
//         'description':'good fit size.',
        
// })
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

 //  ******** Get Product ********
 product.all()
 .then(res=>console.log(res))
.catch(err=>console.log(err))       


app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))