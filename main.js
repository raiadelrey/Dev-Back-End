const express = require('express')
const app = express()

app.get('/rota1', (req,res) => {
    res.send ('Usando o Express, crie um código Node.JS, que deve receber requisições HTTP GET e POST. \n Depois, coloque o servidor para rodar na porta 8080.')
})

app.post('/rota2', (req,res) => {
    res.send ('Olá express')
})


app.listen('8080', ()=>
    {console.log ("Servidor executado na porta 8080")

    
})
