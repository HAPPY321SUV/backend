require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please log in chai aur code</h1>')
})
app.get('/myname',(req,res)=>{
    res.send('<h2>subhransu das</h2>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})