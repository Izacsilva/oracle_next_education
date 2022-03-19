import { novoItem } from "./componentes/criaTarefas.js"

const botao = document.querySelector('[data-form-btn]')
botao.addEventListener('click', novoItem)
