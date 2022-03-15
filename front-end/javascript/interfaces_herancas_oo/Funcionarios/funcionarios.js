export class Funcionarios {
    constructor(nome, salario, cpf) {
        this._nome = nome
        this._salario = salario
        this._cpf = cpf
        this._senha; // O valor de senha, é dado através do método "cadastrarSenha" através da interface.
        
        this._bonificacao = 1;
    }

    // método 
    autenticar(senha) {
        return senha == this._senha
    }

    // Gera uma senha para o usuário e armazena em "this.senha" no construtor.
    cadastrarSenha(senha) {
        this._senha = senha;
    }
}