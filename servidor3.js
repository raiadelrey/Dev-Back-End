/*Para rodar o código: 
1 - Abra o terminal e instale a biblioteca express ('npm install express')
2 - Digite 'node servidor3.js'
*/

const express = require('express')

const app = express()



app.get('/', (req,res) => { res.send("HTTP GET. FUNCIONANDO COM SUCESSO!")
})

app.post('/', (req,res) => { res.send("HTTP post. Inserido com sucesso!")
})

app.put('/', (req,res) => { res.send("HTTP put. Atualizado com sucesso!")
})

app.delete('/', (req,res) => { res.send("HTTP delete. Deletado com sucesso!")
})

app.listen('8080', () => {
    console.log("Servidor funcionando  na porta 8080")
})

