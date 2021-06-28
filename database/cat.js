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


module.exports = {
    all,
    save
}