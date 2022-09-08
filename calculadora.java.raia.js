const readline = require('readline-sync');

 function calculadora() {

  var n1 = readline.questionFloat('Digite o primeiro número'); 
  var n2 = readline.questionFloat('Digite o segundo número?');
  var op = readline.question("Qual é a operação?");
  var soma = n1 + n2;
  var sub = n1 - n2;
  var div = n1 / n2;
  var mult = n1 * n2;
  var resto = n1 % n2;

   if (op == "+") 
     return soma
   if (op == "-")
      return sub
   if (op == "*")
      return mult;
  if (op == "/")
   return  ("Resultado:",  div) 
     if (n1 % n2 != 0)
       return resto

 }
   
  console.log(calculadora());
  
   
