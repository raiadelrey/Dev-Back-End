const express = require('express')

const app = express()



app.get('/listar/10', (req,res) => { res.send("HTTP 200.")
})

app.get('/listar/50', (req,res) => { res.status(404).send("Page not found --- HTTP 404.")
})

app.listen('8080', () => {
    console.log("Servidor funcionando  na porta 8080")
})