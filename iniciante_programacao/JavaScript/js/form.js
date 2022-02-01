const botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    // Seleciono o formulário no DOM
    const formulario = document.querySelector('#form-adiciona')
    const campoNome = document.querySelector('#nome')
    const campoPeso = document.querySelector('#peso')
    const campoAltura = document.querySelector('#altura')
    const campoGordura = document.querySelector('#gordura')
    
    // Capturo todos os valores dos elementos da tabela

    // Através da função obtem Dados retorno
    let paciente = obtemDadosPacientes(formulario);

    // let nome = formulario.nome.value;
    // let peso = formulario.peso.value;
    // let altura = formulario.altura.value;
    // let gordura = formulario.gordura.value;

    // Crio variável com elementos('tag') HTML <tr> e <td> 
    // let pacienteTr = document.createElement('tr');
    montaTr('paciente')
    /* Eu estava selecionando, não criando elementos */
    // let nomeTd = document.querySelector('td');
    // let pesoTd = document.querySelector('td');
    // let alturaTd = document.querySelector('td');
    // let gorduraTd = document.querySelector('td');
    // let imcTd = document.querySelector('td');

    /* O correto é createElement, que irá criar um elemento HTML */
    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    // Agora coloco os valores dentro dos elementos com a propriedade
    // textContent, colocando o valor para o DOM (jogando no HTML)
    // 
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);

    // Dentro da tabela do formulário vou adicionar o <tr> com os <td>

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
    
    // Limpo os campos após enviar os dados para o formulário.
    campoNome.value = ''
    campoPeso.value = ''
    campoAltura.value = ''
    campoGordura.value = ''


    
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

function montaTr(classe) {
    let pacienteTr = document.createElement('tr');
        pacienteTr.classList.add(classe)
}