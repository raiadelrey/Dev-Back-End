var express = require ('express');

var app = express();

app.listen(8887);

app.get('/code.js',(request,response)=>{
    return response.send("Crie um código JavaScript");
});

app.post('/user.raia.post',(request ,response)=>{
    return response.send('CURSO EM ANDAMENTO');
});


app.put('/user.raia.put', function (req, res) {
    res.send('Depois, faça um teste em aplicações de rota, como o Postman ou o Insomnia, para confirmar se o retorno está coerente com o que você programou.');
  });

app.delete('/user.raia.delete', function (req, res) {
    res.send('CURSO EM ANDAMENTO');
  });



