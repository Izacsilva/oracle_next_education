import {Cliente} from './Clientes.js'
import {ContaCorrente} from './ContaCorrente.js'

// Cria um novo objeto cliente.
const clienteJoao = new Cliente("João", 8206660033) // novo cliente atrvés do contrutor.
// Cria uma nova ContaCorrente().
const contaDoJoao = new ContaCorrente(1001, clienteJoao)
// João faz o primeiro deposito.
contaDoJoao.depositar(200)
contaDoJoao.sacar(50)
contaDoJoao.depositar(150)
const valorSacado = contaDoJoao.sacar(50)
// contaDOJoao.depositar(-1)

// Cria um novo objeto cliente.
const clienteAlice = new Cliente(["Alice", "Maciel"], 8206480073) // novo cliente atrvés do contrutor.
/*clienteAlice.nome = ["Alice", "Maciel"]*/ // novo cliente com atribuição.
// Cria uma nova ContaCorrente().
const contaAlice = new ContaCorrente(1002, clienteAlice)
// Método transferir, está tranferindo 200 reais para Alice.
contaDoJoao.transferir(200, contaAlice)


console.log(ContaCorrente.numeroDeContas)