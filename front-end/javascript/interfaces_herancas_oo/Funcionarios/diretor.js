import { Funcionarios } from "./funcionarios.js";

export class Diretor extends Funcionarios{
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this._bonificacao = 2;
    }

    autenticar() {
        return true;
    }

}