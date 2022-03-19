import BotaoDeletar from "./deletaTarefas.js";
import BotaoConclui from "./concluirTarefas.js";




export const novoItem = (evento) => {
        
    evento.preventDefault() //Evita o reloud da página

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    // Pesquisa(busca) elementos no DOM
    const lista = document.querySelector("[data-list]");
    const calendario = document.querySelector("[data-form-time]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    const data = moment(calendario.value);

    const dateFormated = data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dateFormated
    };

    const tarefasAtualizadas = [...tarefas, dados];
    
    const criaTarefa = Tarefas(dados); // Invoca a função, recebe como retorno um componente que será impresso na tela.
    
    
    localStorage.setItem("tarefa", JSON.stringify(tarefasAtualizadas));
    
    lista.appendChild(criaTarefa); // Imprime o elemento no DOM.
    input.value = " ";

    
    

}


export const Tarefas = ({valor, dateFormated}) => {
    
    // Cria apartir do JS um elemento <li> no html
    const tarefa = document.createElement("li")
    tarefa.classList.add('item-list') // Adiciona um classe a li

    const conteudo = `<p class="content"> ${dateFormated} - ${valor}</p>` // Variável que cria um <p> e insere o valor do campo.
    
    tarefa.innerHTML = conteudo // Colocando o valor da variavel ao Elemento <li>
    
    // O código abaixo, irá pegar dois componentes criados com java script para colocar dentro do elemento <li>(também é outro componente)
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeletar())

    return tarefa

}