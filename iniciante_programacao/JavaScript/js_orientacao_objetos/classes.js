// Cria a classes de clientes.
class Cliente{
    nome;
    cpf;
    

}

class ContaCorrente{
    agencia;
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
}

// Cria um novo objeto cliente.
const Joao = new Cliente()
Joao.nome = "João"
Joao.cpf = 8206660033

// Cria uma nova ContaCorrente().
const contaDOJoao = new ContaCorrente()
contaDOJoao.agencia = 1001

// João faz o primeiro deposito.

contaDOJoao.depositar(200)
contaDOJoao.sacar(50)
contaDOJoao.depositar(150)
// contaDOJoao.depositar(-1)


console.log(`Cliente ${Joao.nome}, saldo ${contaDOJoao._saldo}`)