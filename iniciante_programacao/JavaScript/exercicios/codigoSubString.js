// Aprendemos como filtrar, comparar letra a letra, 
// utilizando expressões regulares, representado pelo 
// fragmento de código abaixo:

var expressao = new RegExp(this.value,"i");
if (!expressao.test(nome)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}

// Mas há um modo de fazer essa comparação sem a necessidade 
// de utilizar expressões regulares! Podemos utilizar a função 
// substring, que recebe dois parâmetros, fazendo com que ela devolva 
// parte da string, com o tamanho definido nos parâmetros. 
// O primeiro parâmetro é o início, começando do 0 (que representa o primeiro caractere). 
// O segundo parâmetro define o fim (exclusivo, mostramos até o penúltimo caractere)
// . Por exemplo:


var string = "Alura";
var resultado = string.substring(1, 4);

/* Resultado */ // >>> lur

// Solução:

nome.substr(0, this.value.length);

var comparavel = nome.substr(0, this.value.length);
if (!(this.value == comparavel)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}

var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}

