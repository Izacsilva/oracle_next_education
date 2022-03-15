// export class SistemaDeLogin {
//     static login(funcionario, senha) {
//         // "funcionario.senha" faz uma chamada para o Objeto instânciado funcionario(gerente ou diretor)
//         // Criados apartir do index, acessa o "get senha" e compara o valor.
//         return funcionario.senha == senha
//     }
// }

export class SistemaDeLogin {
    static login(funcionario, senha) {
        return funcionario.autenticar(senha)
       
    }
}