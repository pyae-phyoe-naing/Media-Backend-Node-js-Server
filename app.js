require('dotenv').config();
let express = require('express'),
        app = express();
let passgen = require('./helper/passgen')
let hash ='$2a$10$bXWTQEoN35b7iKLbvjSQKOisEcowZEERM8UQHnOVp/uw8DuZR37GO';

//passgen.encrypt('123')
passgen.compare('12345','$2a$10$bXWTQEoN35b7iKLbvjSQKOisEcowZEERM8UQHnOVp/uw8DuZR37GO')
.then(res=>console.log(res))
.catch(err=>console.log(err));

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`));