
//Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

//Observações:
//- buscar saldo deve retornar o valor atual do saldo;
//- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
//- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
//- o número da conta deve retornar o número da conta.



 class Banco {
   
    
    #ag;   
    #conta;
    #saldo;
    #tipoconta;


 constructor (ag, conta, saldo, tipoconta) {
    this.#conta = conta;
    this.#saldo = saldo;
    this.#tipoconta = tipoconta;
    this.#ag = ag;


}
}
   buscarSaldo();{
    return console.log("Saldo atual:  R$",this.saldo);

}
  deposito(depositox);{

     return this.#saldo + depositox;


}

 saque(saquex);{
    this.#saldo -= saquex;



}
 numeroconta();{
    console.log("Número da conta: ", this.#conta );
}

var conta0 = new Banco (0001,15999, 900, "corrente");
console.log (conta0.numeroconta);
console.log(conta0.buscarSaldo);
console.log("Deposito: R$", conta0.deposito=770);

let Banco1 =  {
    conta: 15999,
    ag: 0001,
    tipoconta: "Conta Corrente",
    saldo: 900,
   
    buscarSaldo() {  return console.log("SALDO ATUAL: R$ ", Banco1.saldo)
    deposito(depositox) ;{ Banco1.saldo += depositox;}
    saque(saquex) ;{ Banco1.saldo -= saquex}
    numeroconta() ;{ return console.log ("Conta:", Banco1.conta)}


    }
}
    Banco1.numeroconta();
    Banco1.buscarSaldo();
    Banco1.deposito(100);
    Banco1.saque(200);
   
    console.log("Depósito")
