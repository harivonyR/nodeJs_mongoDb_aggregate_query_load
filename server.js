const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {aggregationController} = require('./controller/aggregationController')

const path = require('path')

app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, '/view'))
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/aggregation',(req,res)=>{
    res.render('aggregation')
})

app.post('/aggregation',aggregationController)

app.listen(5050,()=>{
    console.log('server started on port 5050')
})
