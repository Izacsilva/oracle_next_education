const BotaoDeletar = () => {
    const botaoDeletar = document.createElement('button')

    botaoDeletar.classList.add('btn-check')
    botaoDeletar.innerText = '❌'
    botaoDeletar.addEventListener('click', deletarTarefa);

    return botaoDeletar
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target

    const tarefaFeita = botaoDeleta.parentElement
    tarefaFeita.remove()

}

export default BotaoDeletar

// Cuidado com o "CORS"