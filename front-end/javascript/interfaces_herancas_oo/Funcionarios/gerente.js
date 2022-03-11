import { Funcionarios } from "./funcionarios.js";

export class Gerente extends Funcionarios{
    constructor(nome, salario, cpf) {
        super (nome, salario, cpf)
        
        this._bonificacao = 1.1;
    }
}