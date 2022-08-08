const app = require('express')()
const path = require('path')

app.set('views', path.join(__dirname, '/view'))
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/aggregate',(req,res)=>{
    res.render('aggregation')
})

app.listen(5050,()=>{
    console.log('server started on port 5050')
})
