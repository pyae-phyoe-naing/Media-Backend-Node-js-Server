require('dotenv').config();
let express = require('express'),
        app = express();
let gallery = require('./database/gallery');

let galleryArray = {
        'name' : 'coder.png'
}
//gallery.save(galleryArray)
gallery.all()
.then(res=>console.log(res))
.catch(err=>console.log(err));

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))