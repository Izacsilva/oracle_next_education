const bnt_busca = document.querySelector('#buscar-pacientes')

bnt_busca.addEventListener('click', () => {

    let requisicoes = new XMLHttpRequest();

    requisicoes.open('GET', 'https://api-pacientes.herokuapp.com/paciiiientes')

    requisicoes.addEventListener('load', () => {

    const msgErro = document.querySelector('#erroAjax')
        if(requisicoes.status == 200) {
            // armazena em uma variável a resposta em formato de texto
            let resposta = requisicoes.responseText;

            // converte a resposta em um objeto JAVASCRIPT.
            let pacientes = JSON.parse(resposta)
            pacientes.forEach(function(paciente) {
            // usa a função para acionar a respota(obejtos) dentro da tabela
            adicionaParcientesNaTabela(paciente)
        })
        } else {
            msgErro.classList.remove('invisivel')
        }
    })

    requisicoes.send();
})