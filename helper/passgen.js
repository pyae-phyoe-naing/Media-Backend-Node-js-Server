let bcrypt = require('bcryptjs');

let encrypt = (pass)=>{
    return new Promise((resolve,reject)=>{
        let salt = bcrypt.genSaltSync(10);
           bcrypt.hash(pass,salt,(err,hash)=>{
            if(err) reject(err)
            resolve(hash)
        })
    });
}

let compare = (pass,hash)=>{
    return new Promise((resolve,reject)=>{
       bcrypt.compare(pass,hash,(err,bool)=>{
           if(err) reject(err)
           resolve(bool);
       })
    });
}
module.exports = {
    encrypt,
    compare
}