 const readline = require('readline-sync');

/*O segundo código é um programa que o aluno deve escrever duas notas 
e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.*/

 function notas2() {

    var n1 = readline.questionFloat('Digite a primeira nota:'); 
    var n2 = readline.questionFloat('Digite a segunda nota:');
    var media1 = (n1+n2)/2 ;
    var n3 =  (21-(n1 + n2));

    console.log("Sua média é:" , media1,"." + "Você precisa obter, no mínimo,", n3, " na próxima prova para poder ser aprovado.");
 }


/*Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base 
nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. */

 function notas() {

  var n1 = readline.questionFloat('Digite a primeira nota:'); 
  var n2 = readline.questionFloat('Digite a segunda nota:');
  var n3 = readline.questionFloat('Digite a terceira nota:');
  var media = (n1 + n2 + n3)/3;

  (media >= 7) ? console.log("MÉDIA:" , media,  "ALUNO APROVADO.") : console.log("MÉDIA: ", media, "ALUNO REPROVADO.");


  

 }

 console.log(notas2())
 console.log(notas())
 

