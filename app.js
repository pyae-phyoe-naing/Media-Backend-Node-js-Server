require('dotenv').config();
let express = require('express'),
        app = express();


app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))