//conectivity for nodemon
const mongoose = require('mongoose')
const monogURI = '' 
const connectTOmongo = ()=>{
    mongoose.connect(monogURI ,()=>{
        console.log('connected to server');
    })
}
module.exports = connectTOmongo;
