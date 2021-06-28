require('dotenv').config();
let express = require('express'),
        app = express();
const cat = require('./database/cat');

let catObj = {
    id : 1,
    name : 'Car',
    image : 'crown.png',
    since :  Date.now()
}
// ******* add cat **********
// cat.save(catObj)  // cat.js promise return
//.then(res=>console.log(res))
//.catch(error=> console.log(error))

// ***** update cat *******
let updateCat = {
    id : '60da14cf8df4fc26f400eb8d',
    name : 'Desktop',
}
cat.update(updateCat)
.then(res => console.log(res))
.catch(error=>console.log(error))
// ***** get all cat *******
cat.all()
.then(res=>console.log(res))
.catch(error=> console.log(error))

app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))