
function validaPeso(peso) {
    if (peso > 0 && peso <= 350) {
        return true;
    }else {
        return false;
    }
}


function validaAltura(altura) {
    if (altura >= 1 && altura <= 3.00) {
        return true;
    }else {
        return false;
    }
}


function validaPaciente(paciente){
    
    let erros = []

    if(!validaPeso(paciente.peso)) erros.push('O Peso é Inválido!');
    
    if(!validaAltura(paciente.altura)) erros.push('A Altura é Inválido!')

    // Campos não deve ser branco

    if(paciente.nome.length == 0) erros.push('Nome não pode está em branco!')
    if(paciente.peso.length == 0) erros.push('Peso não pode está em branco!')
    if(paciente.altura.length == 0) erros.push('Altura não pode está em branco!')
    if(paciente.gordura.length == 0) erros.push('Gordura não pode está em branco!')
    

    return erros
};

function validaCampoEmBranco(prop) {
    
    /* Um loop vai passar pelo objeto paciente verificando se
    * alguma propriedade tem o valor da string é menor que zero "0"
    * se tiver irá retornar o nome da propriedade para uma string literal
    * e retornar a propriedade para a mesma se manipulado no JavaScript.*/
}