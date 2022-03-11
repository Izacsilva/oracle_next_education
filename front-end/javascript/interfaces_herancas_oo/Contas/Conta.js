import {Cliente} from '../Clientes.js'

export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
           throw new Error("Você não deveria instanciar um objeto do tipo conta.")
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

// Só adicione cliente se for objeto de cliente.

set cliente(novoValor) {
    // só atribua o valor se o novoValor for uma instância.
    if(novoValor instanceof Cliente) {
        this._cliente = novoValor
    }
    
}



    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa)
        
    };

    _sacar(valor, taxa) {
        
        const valorSacado = taxa * valor

        if(this._saldo >= valorSacado) {

            this._saldo -= valorSacado
            return valorSacado
        } else {
            console.log(`Saldo insuficiente ${this._saldo}`)
        } 
    }

    depositar(valor) {

        if(valor > 0) {
            this._saldo += valor
        } else {
            console.log(`Essa operação não pode ser efetuada! O valor ${valor} é incorreto.`)
        }
    };
    
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }

}