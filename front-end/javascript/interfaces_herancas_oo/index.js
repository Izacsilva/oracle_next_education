import {Cliente} from '.Contas/Clientes.js'
import {ContaCorrente} from '.Contas/ContaCorrente.js'
import { ContaPoupanca } from '.Contas/ContaPoupanca.js'
import { Conta} from './Contas/Conta.js'
const clienteJoao = new Cliente("João", 8206660033)

const contaDoJoao = new ContaCorrente(clienteJoao, 1001)
contaDoJoao.depositar(200)
const valorSacado = contaDoJoao.sacar(50)
const poupancaJoao = new ContaPoupanca(150, clienteJoao, 1001)
const sacaValor = poupancaJoao.sacar(50)
const contaJoao = new Conta(0, clienteJoao, 1001)

console.log(contaDoJoao, poupancaJoao)
