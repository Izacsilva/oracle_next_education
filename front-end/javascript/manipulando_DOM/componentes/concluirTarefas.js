function concluirTarefa(atualiza, id) {
    // const botaoConclui = evento.target // Pega o alvo. Como tem um evento no botão ele irá executar a função.
    // const tarefaCompleta = botaoConclui.parentElement // Busca o Pai do elemento.
    // tarefaCompleta.classList.toggle('done') // Aplica a classe.

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida

    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

    // atualiza()

}

const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('btn-check')
    botaoConclui.innerText = '✔'
    botaoConclui.addEventListener('click', ()=>concluirTarefa(atualiza, id))

    return botaoConclui
}


export default BotaoConclui