import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }
    
    get sacar() {
        let taxa = 1.1

        return this._sacar(valor, taxa)
    }
}