/*Crie um pequeno servidor web que contenha várias rotas.
Em cada rota, você deverá fazer o controle do fluxo de requisições de maneira estática ou dinâmica, 
alterne entre essas formas usando placeholders e query.*/



const express = require('express')

const app = express()



app.get('/bookget', (req,res) => { res.status(200).send("OKAY!")
})

app.get('/bookget: id', function(req,res){
    const id = req.params.id;
    res.send('id recebido',{id})
})

app.get('/listar', function(req,res){
    const page = req.query.page
    const pageSize = req.query.pageSize
    
    res.send(`page ${page}, pageSize ${pageSize}`)
})



app.listen('8080', () => {
    console.log("Servidor escutando na porta 8080")
})
