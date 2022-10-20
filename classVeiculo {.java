//OBS: CÓDIGO COM ERRO A SER CORRIGIDO. 


abstract class Veiculo {
    constructor(modelo, marca, cor,numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;

    }
      Veiculo.prototype = Object.create(veiculoPrototype);
      const veiculoPrototype = {
        modelo: "Creta 2023";
        marca: "Hyundai";
        cor: "Cinza"
        numeroRodas: 4;

        caracteristicas() {
            return '${this.modelo}' '${this.marca}' '${this.cor}' ;
        }

      }


   
}
const veiculo1 = new Veiculo("Creta", "Hyundai", "Cinza", 4);
console.log(veiculo1.caracteristicas());

const veiculo2 = new subVeiculo("HB20", "Hyundai","Cinza", 4);
veiculo2 = veiculo1.clone
veiculo2.modelo = "Hb20"
veiculo2.midia = false
console.log(veiculo2.caracteristicas())
