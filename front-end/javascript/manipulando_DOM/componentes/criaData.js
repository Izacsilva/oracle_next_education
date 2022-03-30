import { Tarefas } from "./criaTarefas.js"

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    
    const dataTopo = document.createElement('li') // Elemento HTML <li>
    dataTopo.classList.add('date-header')
    const dataMoment = moment(data, "DD/MM/YYYY")
    const conteudo = `<p class="content-data"> ${dataMoment.format("DD/MM/YYYY")}</p>` // Elemento HTML paragrafo com conteúdo.

    dataTopo.innerHTML = conteudo
    

     // Para cada tarefa que ele está pegando do localStorage(cada elemento)
     // individualmente, está criando uma lista agrupada por uma data ao topo  
    tarefas.forEach(((tarefa, id) => {
        const dia = moment(tarefa.dateFormated, 'DD/MM/YYYY')
        const diff = dataMoment.diff(dia)

        if (diff === 0) {
            dataTopo.appendChild(Tarefas(tarefa, id))
        }
        
    }))

    return dataTopo
}
