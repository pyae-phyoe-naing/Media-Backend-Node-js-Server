require('dotenv').config();
let express = require('express'),
        app = express()
        jwt = require('jsonwebtoken')
        passport = require('passport'),
        bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

let guestRoute = require('./routes/guest') (express);
let userRoute = require('./routes/user')(express,jwt);
let adminRoute = require('./routes/admin') (express,passport);

app.use('/guest',guestRoute);
app.use('/user',userRoute);
app.use('/admin',adminRoute);


app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`));