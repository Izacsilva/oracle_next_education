var titulo = document.querySelector('.titulo')
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var celulaImc = paciente.querySelector(".info-imc");
    
    
    var pesoValido = true;
    var alturaValido = true;
    
    if (peso < 0 || peso > 400) {
        celulaImc.textContent = "Peso Inválido"
        var pesoValido = false;
        paciente.classList.add("paciente-invalido")

    }

    if (altura < 1 || altura > 3.00) {
        celulaImc.textContent = "altura Inválido"
        var alturaValido = false;
        paciente.classList.add("paciente-invalido")
    }

    if (pesoValido && alturaValido) {
        var imc = peso / (altura * altura);
        celulaImc.textContent = imc;
    }
    
    
    if (pesoValido && alturaValido) {
        var imc = peso / (altura * altura);
        celulaImc.textContent = imc.toFixed(2)
    }
    
}

const botaoAdicionar = querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(){
    alert('paciente adicionado!')
})

titulo.addEventListener('click', mostraMensagem);

function mostraMensagem() {
    alert('fui cliclado!')
}



