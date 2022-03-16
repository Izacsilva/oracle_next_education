import BotaoDeletar from "./componentes/deletaTarefas.js";
import BotaoConclui from "./componentes/concluirTarefas.js";

function criarTarefas(evento) {
    
    evento.preventDefault() //evita o reloud da página

    // Pesquisa(busca) elementos no DOM
    const lista = document.querySelector("[data-list]")
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    
    
    // Cria apartir do JS um elemento <li> no html
    const tarefa = document.createElement("li")
    tarefa.classList.add('item-list') // Adiciona um classe a li

    const conteudo = `<p class="content">${valor}</p>` // Variável que cria um <p> e insere o valor do campo.
    
    tarefa.innerHTML = conteudo // Colocando o valor da variavel ao Elemento <li>
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeletar())
    lista.appendChild(tarefa) // e o colocando dentro do pai(<ul>) no DOM
    
    

    input.value = " "
}

const botao = document.querySelector('[data-form-btn]')
botao.addEventListener('click', criarTarefas)

// const BotaoConclui = () => {
//     const botaoConclui = document.createElement('button')

//     botaoConclui.classList.add('btn-check')
//     botaoConclui.innerText = '✔'
//     botaoConclui.addEventListener('click', concluirTarefa)

//     return botaoConclui
// }

// function concluirTarefa(evento) {
//     const botaoConclui = evento.target // Pega o alvo. Como tem um evento no botão ele irá executar a função.

//     const tarefaCompleta = botaoConclui.parentElement // Busca o Pai do elemento.
//     tarefaCompleta.classList.toggle('done') // Aplica a classe.
// }

// const BotaoDeletar = () => {
//     const botaoDeletar = document.createElement('button')

//     botaoDeletar.classList.add('btn-check')
//     botaoDeletar.innerText = '❌'
//     botaoDeletar.addEventListener('click', deletarTarefa);

//     return botaoDeletar
// }

// const deletarTarefa = (evento) => {
//     const botaoDeleta = evento.target

//     const tarefaFeita = botaoDeleta.parentElement
//     tarefaFeita.remove()

// }
