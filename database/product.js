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
// ******* Paginate *********
let paginate = (start,count)=>{
    var options = {
        sort : {_id : 1}, // 1, -1 reverse
        lean:true, // no skip
        page : start,
        limit : count
    };
   return new Promise((resolve,reject)=>{
      Product.paginate({},options,(err,res)=>{
          if(err) reject(err)
          resolve(res)
      })
   })
}
module.exports = {
    save,
    all,
    destroy,
    paginate
}
