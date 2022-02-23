let resultado;

function func(x,y) {
    if(y == 0){
        return x
    } else {
        return func(y, x % y)
    }
}

resultado = func(9,3)

console.log(resultado)