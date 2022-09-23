public class Banco {
   
    
    private int ag;   
    private int conta;
    private float saldo;
    private String tipoconta;


constructor(ag, conta, saldo, tipoconta) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoconta = tipoconta;     
    this.ag = ag;


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
    console.log("Número da conta: ", this.conta );
}

var conta0 = new Banco (0001,1599988, 900, "corrente");
console.log (conta0.numeroconta);
console.log(conta0.buscarSaldo);
console.log("Deposito: R$", conta0.deposito=770);

let Banco1 =  {
    conta: 1599988,
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

}
    