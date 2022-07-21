const express = require('express')
const { route } = require('express/lib/application')
const server = express()
const router = express.Router()
const path = require('path')
require('dotenv').config()

const {parseQuerry,sendQuerry} = require('./controller/form_controller')

//const {main} = require("./aggregate")
//main().catch(console.error);

/***  FORM ROUTE ***/
router.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

route.post('/form',async (req,res)=>{
    let {db,coll,pipe} = parseQuerry(req)
    await sendQuerry(db,coll,pipe)
})


// 404 not found
router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/404_not_found.html'));
})

server.use('/',router)

let port = process.env.PORT

server.listen(port,()=>{
    console.log('Server started on : http://localhost:'+port+"/form")
})