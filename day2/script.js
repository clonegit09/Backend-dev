const express=require('express') 

const app = express()

app.use(function(req,res,next){
    console.log("middleware chala")
    next();
})

app.use(function(req,res,next){
    console.log("middleware chala part 2")
    next();
})

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/about', (req, res) => {
  res.send('Home page')
})

app.get('/profile', (req, res) => {
  res.send('Home page')
})


app.listen(3000)