require('dotenv').config();
let express = require('express'),
        app = express();
let user = require('./database/user');

let saveUser = {
        'name' : 'Ko Aung',
        'email':'koaung@gmail.com',
        'password':'123',
}

//user.save(saveUser)
user.all()
.then(res=>console.log(res))
.catch(err=>console.log(err));

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))