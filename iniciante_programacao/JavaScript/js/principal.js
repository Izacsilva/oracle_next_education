var titulo = document.querySelector('.titulo')
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var celulaImc = paciente.querySelector(".info-imc");


var imc = peso / (altura * altura);
celulaImc.textContent = imc;

var pesoValido = true;
var alturaValido = true;

if (peso < 0 || peso > 400) {
    celulaImc.textContent = "Peso Inválido"
    var pesoValido = false;
}

if (altura < 1 || altura > 3.00) {
    celulaImc.textContent = "altura Inválido"
    var alturaValido = false;
}

if (pesoValido && alturaValido) {
    var imc = peso / (altura * altura);
    celulaImc.textContent = imc;
}
