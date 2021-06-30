require('dotenv').config();
let express = require('express'),
        app = express()
        jwt = require('jsonwebtoken')
        JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt,
        passport = require('passport'),
        path = require('path'),
        bodyParser = require('body-parser');

let User = require('./database/user');
let jwtOption = {};
jwtOption.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOption.secretOrKey = process.env.SECRET;     
let myStrategy = new JwtStrategy(jwtOption, function(payload, done) {
       let email = payload.email;
       let name = payload.name;
       User.findUserByEmail(email)
       .then((user)=>{
               if(user.name == name){
                 done(null,user);
               }
       })
       .catch(err=>done(null,err))
    });
    
app.use(express.static(path.join(__dirname,'./asset')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
passport.use(myStrategy);

let guestRoute = require('./routes/guest') (express);
let userRoute = require('./routes/user')(express,jwt);
let adminRoute = require('./routes/admin') (express,passport);

app.use('/guest',guestRoute);
app.use('/user',userRoute);
app.use('/admin',adminRoute);


app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`));