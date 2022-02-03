// document.querySelector('.total').textContent = extrairIdade();

function exibiResultado(total) {
    let span = document.querySelector('.total')
    let p = document.createElement('p')
    p.className = "result"
    p.textContent = total;

    span.appendChild(p)

    // span.textContent = extrairIdade();
}


let convidados = criaListaDeConvidades();
let totalDasIdades = calculaTotalDasIdades(convidados);

exibiResultado(totalDasIdades);