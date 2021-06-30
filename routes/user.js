let passgan = require('../helper/passgen');
let User = require('../database/user');

module.exports = (express,jwt)=>{
    let router = express.Router();
    router.post('/api/register',(req,res)=>{
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
         passgan.encrypt(password)
        .then(hash=>{
            let user = {
                'name' : name,
                'email' : email,
                'password' : hash
            };
            User.save(user)
           .then(user => res.send({success:true,data:user}))
           .catch(err => res.send({success:false,data:err}));
        })
        .catch(err => res.send({success:false,data:err}));
    });

    router.post('/api/login',(req,res)=>{
        let email = req.body.email;
        let password = req.body.password;
        User.findUserByEmail(email)
        .then(user => {
           passgan.compare(password,user.password)
           .then(cond =>{
              if(cond){
                let payload = {email:user.email,name:user.name};
                let token = jwt.sign(payload,process.env.SECRET);
                res.send({success:true,data:token});
              }else{
                res.send({success:false,data:'Incorrect password!'});             
              }
           })
           .catch(err => res.send({success:false,data:err}));
        })
        .catch(err => res.send({success:false,data:err}));
    });
    return router;
}