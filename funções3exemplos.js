const readline = require('readline-sync');


 function calculadoracientifica(num1, num2 , op); {

    if (op = "+") {
       var res = num1 + num2;
    }
    if (op = "-") {
        var res = num1 - num2;
    }
    if (op = "*"){
       var res = num1 * num2;

}
    if (op = "**")  {
       var res = num1 ** num2;
    }
    if (op = "/"){
        var res = num1 / num2;

    }
    if (op = "%"){
        var res = num1 % num2;
    }
    
    
   
 }
    console.log(calculadoracientifica(9,3,"**"))


 function notas() {

  var nome = readline.question("Digite seu nome.")
  var n1 = readline.questionFloat('Digite a primeira nota:'); 
  var n2 = readline.questionFloat('Digite a segunda nota:');
  var n3 = readline.questionFloat('Digite a terceira nota:');
  var mediaaluno = (n1 + n2 + n3)/3;

  
  (mediaaluno >= 7) ? console.log(media0 = mediaaluno, "Aluno", nome, "aprovado com média:", mediaaluno) : console.log("Aluno", nome, "reprovado com média:", mediaaluno)

 
  }

  
  console.log(notas())





const cadastro = (nome, cpf, nasc) => {

   
    console.log("Usuário,", nome, "nascido em", nasc, ",com CPF" , cpf,  "cadastrado com sucesso!");



}

console.log(cadastro(Raiane, 30+de+setembro+2001, 133000000-30))