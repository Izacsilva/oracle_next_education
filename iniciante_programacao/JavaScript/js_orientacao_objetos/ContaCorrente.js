import {Cliente} from './Clientes.js'
export class ContaCorrente{
    agencia;
    _cliente;
    
    /* Aqui eu irei protejer minha propriedade _cliente, para não receber qualquer valor
     * que não seja uma instância(objeto). utilizando uma estrutura semelhante a um metódo(função).
     * igual a um método ele recebe um parâmentro como valor "cliente(valor)". Diferente de um
     * metódo ele não precisa ser chamado(invocado) com os parêntese "novaConta.cliente()"
     * e sim atribuindo valor com o operador de atribuição(=) "novaConta.cliente = object " 
    */
   
    //metódo set
    set cliente(novoValor) {
        // só atribua o valor se o novoValor for uma instância.
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
        
    }
    // set e get == Acessor
    // acesso sempre é público.
    get cliente() {
        return this._cliente
    }
    // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
    
    // atributo privado - underline "_" para dizer que um atributo é privado.
    _saldo = 0;

    get saldo() {
        return this._saldo
    }

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
        const valorSacado = this.sacar(valor); // retirar o valor "informado como parâmetro" desta minha conta armazena em uma variável.
        conta.depositar(valorSacado)        // e deposita o valor da variável "valorSacado" na conta passada como parâmentro.
    }
}