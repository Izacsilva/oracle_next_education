export class ContaCorrente{
    agencia;
    cliente;
    
    // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor) {
        // This quer dizar dela ou dele.
        /* Então, deste saldo, ou se o saldo da conta tiver uma quantidade
         * maior que o valor que foi passado no parâmentro*/
        if(this._saldo >= valor) {

            // Saque do saldo da conta o valor pedido.
            this._saldo -= valor
            return valor
        } else {
            console.log(`Saldo insuficiente ${this._saldo}`)
        }
    }

    depositar(valor) {
        // Só pode deposita se o valor for maior que zero.
        if(valor > 0) {
            this._saldo += valor
        } else {
            console.log(`Essa operação não pode ser efetuada! O valor ${valor} é incorreto.`)
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}