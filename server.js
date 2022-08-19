const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {aggregationController} = require('./controller/aggregationController')

const path = require('path')

app.use(bodyParser.urlencoded({extended:true}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./views/public'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/aggregation',(req,res)=>{
    res.render('aggregation')
})

app.get('/success',(req,res)=>{
    res.render('success')
})

app.get('/error',(req,res)=>{
    res.render('error',{error:"Erreur de syntax dans la requête"})
})

app.post('/aggregation',aggregationController)



let port = 5050 || 5000

app.listen(port,()=>{
    console.log('server started on http://localhost:'+port)
})
