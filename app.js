require('dotenv').config();
let express = require('express'),
        app = express();
const cat = require('./database/cat');

let catObj = {
    id : 1,
    name : 'Computer',
    image : 'acer.png',
    since :  Date.now()
}
 cat.save(catObj)  // cat.js promise return
.then(res=>console.log(res))
.catch(error=> console.log(error))

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))