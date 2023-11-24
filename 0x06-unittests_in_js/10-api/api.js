const express = require('express')
const parse = require('body-parser')

const app = express();
port = 7865;

app.get('/', (req, res)=>{
    res.send('Welcome to the payment system')
})
app.get('/cart/:id(\\d+)', (req, res) =>{
    const id = req.params.id;
        res.send(`Payment methods for cart ${id}`)
})

app.get('/available_payments', (req, res) =>{
    res.send({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
})
app.use(parse)
app.post('/login', (req, res)=>{
    const username = req.body.params.userName;
    res.send(`Welcome ${username}`)
})
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`)
})
