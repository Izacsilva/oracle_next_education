import { criaData } from "./criaData.js";
import { Tarefas } from "./criaTarefas.js";
import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";

export const carregaTarefas = () => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || []; // Faz requisição paras as tarefas do localStorage.

    const lista = document.querySelector("[data-list]")
    const form = document.querySelector(".form");

    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)
    ordenaDatas(datasUnicas)
    
    datasUnicas.forEach(dia => {
        // const dia = moment(tarefa.dateFormated, 'DD/MM/YYYY')
        lista.appendChild(criaData(dia))
    });

    form.reset()

}