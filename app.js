require('dotenv').config();
let express = require('express'),
        app = express();
 let product = require('./database/product');

//  ******** Get Product ********
//  product.all()
//  .then(res=>console.log(res))
// .catch(err=>console.log(err))       
 //  ******** Delete Product ********
product.destroy(0)
.then(res=>console.log(res))
.catch(err=>console.log(err))

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))