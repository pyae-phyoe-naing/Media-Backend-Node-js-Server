const fs = require('fs');
let Cat = require('./cat');
let Product = require('./product');
// Category Seeder
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
                    Cat.save(obj)
                    .then(res=>console.log(res))
                    .catch(err=>console.log(err))
                });
           }
        });

}
// Product Seeder
let seedProduct = ()=>{
    fs.readFile('products.json',(err,res)=>{
        if(err){
            console.log('File read error ',err);
        }else{
          let products = JSON.parse(res);
          products.forEach(product=>{
              let obj = {
                  'cat_id':product.cat_id,
                  'name':product.name,
                  'price':product.price,
                  'image':product.image,
                  'description':product.description,
              };
              Product.save(obj,)
              .then(res=>console.log(res))
              .catch(err=>console.log(err))
          })
        }
    });
}
module.exports = {
    seedCat,
    seedProduct
}