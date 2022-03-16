const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('btn-check')
    botaoConclui.innerText = '✔'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

function concluirTarefa(evento) {
    const botaoConclui = evento.target // Pega o alvo. Como tem um evento no botão ele irá executar a função.

    const tarefaCompleta = botaoConclui.parentElement // Busca o Pai do elemento.
    tarefaCompleta.classList.toggle('done') // Aplica a classe.
}

export default BotaoConclui