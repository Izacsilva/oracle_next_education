// var itens = document.querySelectorAll('.convidado');



// function extrairIdade() {
    
//     var totalDasIdades = 0;
    
//     for(var i = 0; i < itens.length; i++) {

//         var idade = itens[i].querySelector('.idade').textContent;
//         totalDasIdades+=parseInt(idade);
//     }

//     return totalDasIdades
// }


function criaListaDeConvidades() {

    // Seleciona o elemento criando um array e armazenando em itens
    var itens = document.querySelectorAll('.convidado');

    // Array para receber cada convidado objeto, com propriedades de nome e idade.
    var convidados = [];
    // O loop cria objetos, passando por cada iten do Array 'itens'
    // e armazena em convidados[]
    for (let i = 0; i < itens.length; i++) {
        
        let convidado = {
            nome: itens[i].querySelector('.nome').textContent,
            idade: parseInt(itens[i].querySelector('.idade').textContent)
        };
    // A cada passagem do loop push é feito para convidados[]
        convidados.push(convidado);
    }

    // Retorna a lista de convidados com objetos.
    return convidados
}

function calculaTotalDasIdades(convidados) {

    // variável que recebe o valor de cada idade de convidados
    let total = 0;

    // O loop passa por cada itens do array convidados e soma 
    // a idade a varriável total
    for(let i = 0; i < convidados.length; i++) {
        
        total+=convidados[i].idade; // valor de idade somado em total.
    }

    return total; // retorna a soma de todas as idades.
}