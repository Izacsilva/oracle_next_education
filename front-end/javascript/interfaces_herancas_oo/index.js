import {Cliente} from './Clientes.js'
import {ContaCorrente} from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const clienteJoao = new Cliente("João", 8206660033)

const contaDoJoao = new ContaCorrente(clienteJoao, 1001)
contaDoJoao.depositar(200)
const valorSacado = contaDoJoao.sacar(50)
const poupancaJoao = new ContaPoupanca(150, clienteJoao, 1001)

// console.log(contaDoJoao, poupancaJoao)

console.log(poupancaJoao.saldo)