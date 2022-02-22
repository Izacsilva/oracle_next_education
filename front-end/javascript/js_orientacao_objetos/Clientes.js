// Cria a classes de clientes.
export class Cliente{
    // Aqui atribuimos as propriedades que teram a instância Cliente
    nome; 
    _cpf; // Para cpf, será privado.

    get cpf() {
        return this._cpf; // get para receber o valor que está em cpf.
    }

    constructor (nome, cpf) { // Esse contrutor, é o bloco de código que atribui.
        this.nome = nome
        this._cpf = cpf // valores para nome e _cpf. assim, podemos passar os valores como parâmentro.
    }
}