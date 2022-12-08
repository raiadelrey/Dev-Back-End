/*Sem usar bibliotecas, crie um projeto simples em Node.js que seja capaz de responder requisições HTTP.
Explique como rodar e testar.*/




{

    const http = require ("http");
    const PORTA = process.port || 8080;
    const servidor = http.createServer();
    
    servidor.on ("request" ,(request, response) => { 
            response.end("Testando servidor - CURSO BACKEND SOFTEX")});
            
    
        servidor.listen (PORTA, () => {
            console.log('servidor iniciado na porta ${PORTA}')
        }
        );}

        /* Para testar: digitar no terminal "node + nome do arquivo", iniciando o servidor no pc;
                        entrar no navegador e digitar "localhost:" + nº porta.
         */