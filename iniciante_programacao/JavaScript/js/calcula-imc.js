

var titulo = document.querySelector('.titulo')
titulo.textContent = "Aparecida Nutricionista"

// Seleção da tr paciente, usando o querySelectorAll para criar uma lista
// com todos os elementos
var pacientes = document.querySelectorAll(".paciente");

// Criamos um loop para passar em cada item da lista e ir selecionando
// e "manipulando" cada um individualmente.
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var celulaImc = paciente.querySelector(".info-imc");
    
    
    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);
    
    // validação do peso caso não atenda os padrões
    if (!pesoValido) {
        celulaImc.textContent = "Peso Inválido"
        var pesoValido = false;
        paciente.classList.add("paciente-invalido")

    }

    // validação da altura
    if (!alturaValido) {
        celulaImc.textContent = "altura Inválido"
        var alturaValido = false;
        paciente.classList.add("paciente-invalido")
    }

    // if (pesoValido && alturaValido) {
    //     var imc = peso / (altura * altura);
    //     celulaImc.textContent = imc;
    // }
    
    // Calcula o imc caso esteja válido
    if (pesoValido && alturaValido) {
        var imc = calculaImc(peso, altura);
        celulaImc.textContent = imc
    }
    
}

                // São valores fictícios
function calculaImc(peso, altura) {
    var imc = 0;
    
    imc = peso / (altura * altura);
    
    return imc = imc.toFixed(2)
}




