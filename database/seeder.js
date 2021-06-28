const fs = require('fs');
let Cats = require('./cat');

// first read seed json file

let seedCat = ()=>{

        fs.readFile('categories.json',(err,data)=>{
           if(err){
              console.log('File cannot be read ',err);
            }else{
                let cats = JSON.parse(data); // change buffer string to json data
                cats.forEach((cat)=>{
                    // create new obj because json file not include since field 
                    let obj = {
                        'id' : cat.id,
                        'name' : cat.name,
                        'image' : cat.image,
                        'since' : Date.now()
                    }
                    Cats.save(obj)
                    .then(res=>console.log(res))
                    .catch(err=>console.log(err))
                });
           }
        });

}

module.exports = {
    seedCat
}