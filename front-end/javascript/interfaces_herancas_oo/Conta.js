import {Cliente} from './Clientes.js'

export class Conta{
    constructor(saldoInicial, cliente, agencia) {
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

        if(this._saldo >= valor) {

            this._saldo -= valor
            return valor
        } else {
            console.log(`Saldo insuficiente ${this._saldo}`)
        }
    };

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