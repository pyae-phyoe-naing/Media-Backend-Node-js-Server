require('dotenv').config();
let express = require('express'),
        app = express();
let user = require('./database/user');

//user.findUserById('60dbfe5db02ca03ee03c729b')
user.findUserByEmail('koaung@gmail.com')
.then(res=>console.log(res))
.catch(err=>console.log(err));

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))