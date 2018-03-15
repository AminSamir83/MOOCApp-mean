var express = require('express');
var app = express();
var bodyparser = require('body-parser');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


const auth = require('./server/routing/auth')
app.use('/auth',auth);
const cours = require('./server/routing/cours')
app.use('/cours',cours);
const users= require ('./server/routing/users')
app.use('/users',users);

console.log('hani nesma3 fik 3al 3000')
app.listen(3000)