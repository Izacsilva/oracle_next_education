import { Gerente } from './Funcionarios/gerente.js';
import { Diretor } from './Funcionarios/diretor.js';
import {SistemaDeLogin} from './SistemaDeLogin.js'
import { Cliente } from './Clientes.js';

const Rodrigo = new Diretor("Rodrigo", 10000, "12345872")
Rodrigo.cadastrarSenha("123456")

const Felipe = new Gerente("Felipe", 5000, "12348972")
Felipe.cadastrarSenha("123")

const Roberta = new Cliente("Roberta", "133587625", "456")


const diretorLogado = SistemaDeLogin.login(Rodrigo, "123456")
const gerenteLogado = SistemaDeLogin.login(Felipe, "123")
const clienteLogado = SistemaDeLogin.login(Roberta, "456")

console.log(clienteLogado)