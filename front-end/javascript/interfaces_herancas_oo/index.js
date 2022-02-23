import {Cliente} from './Clientes.js'
import {ContaCorrente} from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import {Conta} from './Conta.js'

const clienteJoao = new Cliente("João", 8206660033)

const contaDoJoao = new Conta(0, 1001, clienteJoao)
contaDoJoao.depositar(200)
const valorSacado = contaDoJoao.sacar(50)
const poupancaJoao = new Conta(150, 1001, "João")

console.log(contaDoJoao, poupancaJoao)