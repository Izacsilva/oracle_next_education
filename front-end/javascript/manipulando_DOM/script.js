import { novoItem } from "./componentes/criaTarefas.js"
import { carregaTarefas } from "./componentes/carregaTarefas.js"


const botao = document.querySelector('[data-form-btn]')
botao.addEventListener('click', novoItem)

carregaTarefas()
