const botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    // Seleciono o formulário no DOM
    const formulario = document.querySelector('#form-adiciona')

    /* Com a variável paciente chamo a função obtemDadosPacientes
    que captura do meu parâmentro que é um form, os dados inserido
    pelo usuário. */

    let paciente = obtemDadosPacientes(formulario);
    

    /* MontaTr é uma função que cria uma tag <tr> no HTML*/
    let pacienteTr = montaTr(paciente);

    // validação de paciente.
    let erros = validaPaciente(paciente);

    console.log(erros)


    // colocar um if else aqui
    if(erros.length > 0) {
        var mensagemErro = document.querySelector('#mensagem-erro')
        let campoNome = document.querySelector('#nome')
        let campoPeso = document.querySelector('#peso')
        let campoAltura = document.querySelector('#altura')
        let campoGordura = document.querySelector('#gordura')

        if (paciente.nome.length == 0 || erros.length > 0) campoNome.classList.add('campoErro');
        if (paciente.peso.length == 0 || erros.length > 0) campoPeso.classList.add('campoErro')
        if (paciente.altura.length == 0 || erros.length > 0) campoAltura.classList.add('campoErro')
        if (paciente.gordura.length == 0 || erros.length > 0) campoGordura.classList.add('campoErro')

        mensagemErro.textContent = erros;

        return;
    }

    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
    
    // Limpar campos após enviar os dados para o formulário.

    formulario.reset();
    
})

function obtemDadosPacientes(formulario) {

    let paciente = {

        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }

    return paciente
}

function montaTd(dado, classe) {
    let td = document.createElement('td');
        td.textContent = dado;
        td.classList.add(classe)

        return td
    // Estava falhando pois a função não tinha retorno
}

function montaTr(paciente) {
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    let nome_tr = montaTd(paciente.nome, 'info-nome');
    let peso_tr = montaTd(paciente.peso, 'info-peso');
    let altura_tr = montaTd(paciente.altura, 'info-altura');
    let gordura_tr = montaTd(paciente.gordura, 'info-gordura');
    let imc_tr = montaTd(paciente.imc, 'info-imc');

    pacienteTr.appendChild(nome_tr);
    pacienteTr.appendChild(peso_tr);
    pacienteTr.appendChild(altura_tr);
    pacienteTr.appendChild(gordura_tr);
    pacienteTr.appendChild(imc_tr);

    return pacienteTr
}

