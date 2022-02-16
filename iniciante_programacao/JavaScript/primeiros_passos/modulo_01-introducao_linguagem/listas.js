console.log(`trabalhando com listas`);

// Declarando Array com o objeto construtor.

const listaDeDestino = new Array(
    `Salvador`,
    `Bahia`,
    `Maceió`,
    `São Paulo`,

)

const listaAviao = [
    "gol 0051648",
    "gol 0671648",
    `gol 0051788`,
    'gol 0864148'
]

// Adiciona itens a lista.
listaDeDestino.push(`Pernambuco`)

// remove elementos da lista splice(qual a posiçao"index", "qual a quantidade")
listaDeDestino.splice(1,2)

console.log(listaDeDestino, listaAviao)