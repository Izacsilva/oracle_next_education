// Cria a classes de clientes.
export class Cliente{
 /* O bloco não é mais utilizado, pois a sintaxe da Class diz que devemos declara as propriedades dentro do construtor

    // Aqui atribuimos as propriedades que teram a instância Cliente
    nome; 
    _cpf; // Para cpf, será privado.
*/
    get cpf() {
        return this._cpf; // get para receber o valor que está em cpf.
    }

    get  senha() {
        return this._senha;
    }

    constructor (nome, cpf, senha) { // Esse contrutor, é o bloco de código que atribui.

        // Dentro do construtor
        this.nome = nome
        this._cpf = cpf // valores para nome e _cpf. assim, podemos passar os valores como parâmentro.
        this._senha = senha;
    }

    autenticar() {
        return true;
    }
}