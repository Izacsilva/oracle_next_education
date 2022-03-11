
import { Conta } from './Conta.js'

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    // set e get == Acessor
    // acesso sempre é público.
    get cliente() {
        return this._cliente
    }

    constructor (cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    };

    get saldo() {
        return this._saldo
    }


    // sobrescreve o comportamento da classe mãe.
    sacar(valor) {
        
        let taxa = 1.1

        return this._sacar(valor, taxa)
        // const valorSacado = taxa * valor; // Pego o valor que o cliente quer sacar e atribuo uma taxa de 1.1 10%

        // if(this._saldo >= valorSacado) { // Se tiver dinheiro"Saldo" e for igual ou maior ao valor que quer sacar

        //     this._saldo -= valorSacado // Retira o valor incluso juros da conta
        //     return valorSacado
        
        // } else {
        //     console.log(`Saldo insuficiente ${this._saldo}`)
        // }

    };


}