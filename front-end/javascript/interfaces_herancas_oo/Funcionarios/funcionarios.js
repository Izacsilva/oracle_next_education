export class Funcionarios {
    constructor(nome, salario, cpf) {
        this._nome = nome
        this._salario = salario
        this._cpf = cpf
        
        this._bonificacao = 1;
    }

    get senha() {
        return this._senha;
    }
    cadastrarSenha(senha) {
        this._senha = senha;
    }
}