import {Cliente} from './Clientes.js'
import {ContaCorrente} from './ContaCorrente.js'

// Cria um novo objeto cliente.
const clienteJoao = new Cliente()
clienteJoao.nome = "João"
clienteJoao.cpf = 8206660033

// Cria uma nova ContaCorrente().
const contaDoJoao = new ContaCorrente()
contaDoJoao.agencia = 1001
contaDoJoao.cliente = clienteJoao

// João faz o primeiro deposito.

contaDoJoao.depositar(200)
contaDoJoao.sacar(50)
contaDoJoao.depositar(150)
const valorSacado = contaDoJoao.sacar(50)

// contaDOJoao.depositar(-1)

// Cria um novo objeto cliente.
const clienteAlice = new Cliente()
clienteAlice.nome = ["Alice", "Maciel"]
clienteAlice.cpf = 8206480073

// Cria uma nova ContaCorrente().
const contaAlice = new ContaCorrente()
contaAlice.agencia = 1001
contaAlice.cliente = clienteAlice

contaDoJoao.transferir(200, contaAlice)


// console.log(`Cliente ${Joao.nome}, saldo ${contaDOJoao._saldo}`)

console.log(contaDoJoao, contaAlice)