//ALUNO(A): RAIANE SANTOS
//CURSO: DEV.BACK-END - SOFTEX 
/*Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.*/




let automovel = {
    marca:"Hyundai",
    modelo:"Creta Nova Geração 2023",
    preco: 157000,
    cambio: "automático",
    motor: '1.0 turbo',
};
let cores = ["Azul", "Cinza", "Branco"];

const automovelCarac= () => {
    for(let infos in automovel) {
        console.log(`${infos}: ${automovel[infos]}`)
    }
 }
 const cordisp = () => {
    for(let infos of cores) {
        console.log(`COR DISPONÍVEL: ${infos}`)
    }
 }
 automovelCarac();
 cordisp();
