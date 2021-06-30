require('dotenv').config();
let express = require('express'),
        app = express();
let product = require('./database/product');
let cat = require('./database/cat');

cat.getProduct('cat_id','id','products')
.then(res=>console.log(res))
.catch(err=>console.log(err));

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))