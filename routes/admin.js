module.exports = (express,passport) => {
     let router = express.Router();
      router.get('/home',(req,res)=>{
        res.send('Admin Home Route');
      });
      router.get('/users',passport.authenticate('jwt', { session: false }),(req,res)=>{
           res.send('Admin secret route')
      });
     return router;
}