const fs = require('fs');
const { resolve } = require('path');
let cat = require('./cat');

// first read seed json file

let seedCat = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('categories.json',(err,data)=>{
           if(err) reject(err)
           resolve(data);
        });
    });
}

module.exports = {
    seedCat
}