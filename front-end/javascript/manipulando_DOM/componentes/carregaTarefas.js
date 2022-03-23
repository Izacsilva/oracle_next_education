import { Tarefas } from "./criaTarefas.js";

export const carregaTarefas = () => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || []; // Faz requisição paras as tarefas do localStorage.

    const lista = document.querySelector("[data-list]")

    lista.innerHTML = " "
    
    tarefasCadastradas.forEach(tarefa => {
        lista.appendChild(Tarefas(tarefa))
    });


}