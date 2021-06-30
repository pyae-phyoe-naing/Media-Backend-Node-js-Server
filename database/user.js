let db = require('./db');
let User = db.User;

let all = ()=>{
  return new Promise((resolve,reject)=>{
       User.find({},(err,data)=>{
           if(err) reject(err)
           resolve(data)
       })
  });
} 
let save = (obj)=>{
    return new Promise((resolve,reject)=>{
        obj.since = Date.now();
       let user = new User(obj);
       user.save((err,res)=>{
           if(err) reject(err)
           resolve(res)
       })
    });
}

module.exports = {
    save,
    all
}