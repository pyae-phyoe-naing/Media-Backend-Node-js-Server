const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/mediaDB';
const connect = mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true},);
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement.initialize(mongoose.createConnection(url));
// or
autoIncrement.initialize(mongoose.connection);

let Schema = mongoose.Schema;

// ************ Category Schema *********** //
let CatScheme = new Schema({
    id : {type:Number,required:true},
    name : {type:String,required:true},
    image : {type:String,required:true},
    since : {type:Date,required:true},
});

let Cat = mongoose.model('category',CatScheme); // create table

// ************ Product Schema *********** //
let ProductScheme = new Schema({
    cat_id : {type:Number,required:true},
      name : {type:String,required:true},
     price : {type:Number,required:true},
     image : {type:String,required:true},
     description : {type:String,required:true},
     since : {type:Date,required:true},
});
// make autoincrement use mongoose-auto-increatement
ProductScheme.plugin(autoIncrement.plugin,'product'); // product => table name
let Product = mongoose.model('product',ProductScheme); // create products table

module.exports = {
    Cat,
    Product
}