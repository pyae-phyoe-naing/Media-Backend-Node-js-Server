require('dotenv').config();
let express = require('express'),
        app = express();
let seeder = require('./database/seeder')

seeder.seedCat()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))