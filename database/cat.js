let db = require('./db');

let Cat = db.Cat;

// **** get cat *******
let all = ()=>{
    return new Promise((resolve, reject)=>{
        Cat.find({},(err,data)=>{
            if(err) reject(err)
            resolve(data);
        });
    });

}
// **** save cat *******
let save = (obj)=>{
    return new Promise((resolve,reject)=>{
        let cat = new Cat(obj);
        cat.save((err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    });
}
// **** update cat *******
let update = (obj)=>{
    return new Promise((resolve, reject)=>{
        Cat.findById(obj.id,(err,data)=>{  // data is find value from database
           if(err) {
              reject(err);
           }else{
                data.name = obj.name ; // data.name = database from name
                data.save((err,result)=>{
                    if(err) reject(err)
                    resolve(result);
                });
           }
        });
    });
}
// **** delete cat *******
let destroy = (id)=>{
    return new Promise((resolve,reject)=>{
       Cat.deleteOne({_id:id},(err)=>{
           if(err){
               reject(err)
           }else{
               resolve('Delete success!');
           }
       })
    });
}
// ********************** //
module.exports = {
    all,
    save,
    update,
    destroy
}