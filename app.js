require('dotenv').config();
let express = require('express'),
        app = express();
 let product = require('./database/product');
let seeder = require('./database/seeder');

seeder.seedProduct();

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))