module.exports = (express)=>{
    let router = express.Router();
    router.get('/home',(req,res)=>{
        res.send('Guest Home Route');
    })
    return router;
}