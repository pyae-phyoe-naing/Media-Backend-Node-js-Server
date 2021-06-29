const db  = require('./db');
const Product = db.Product;

let save = (obj)=>{
    return new Promise((resolve,reject)=>{
      obj.since = Date.now();
       let product = new Product(obj);
       product.save((err,data)=>{
           if(err) reject(err)
           resolve(data)
       });
    });
}
let all = ()=>{
    return new Promise((resolve,reject)=>{
       Product.find({},(err,data)=>{
           if(err) reject(err)
           resolve(data)
       })
    });
}
let destroy = (id)=>{
    return new Promise((resolve,reject)=>{
        Product.deleteOne({_id:id},(err)=>{
            if(err) {
                reject(err)
            }else{
                resolve('Delete success!');
            }
        })
    })
}
module.exports = {
    save,
    all,
    destroy
}