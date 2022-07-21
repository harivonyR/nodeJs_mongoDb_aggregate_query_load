const express = require('express')
//const form = require('./route/form')
const server = express()
const router = express.Router()
const path = require('path')

//const {main} = require("./aggregate")

require('dotenv').config();

//main().catch(console.error);

// formulaire
router.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

// 404 not found
router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/404_not_found.html'));
})

server.use('/',router)

let port = process.env.PORT

server.listen(port,(req,res)=>{
    console.log('Server started on : http://localhost:'+port+"/form")
})