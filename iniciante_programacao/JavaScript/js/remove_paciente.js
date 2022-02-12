let tabelaPaciente = document.querySelector('#tabela-pacientes')

// Escuta os eventos de duplo click da tabela de pacientes
// ocorridos nos elementos <td> e remove o seu pai <tr> "a linha onde está o filho" 
tabelaPaciente.addEventListener('dblclick', (evento) => {
            
    // Adiciono ao elemento uma class, com configurações e mudar
    // opacidade do elemento para 0(zero).
    evento.target.parentNode.classList.add('fadeOut')
            //passo uma arrow function e dentro dela o delete da linha da tabela.
    setTimeout(() => {
        evento.target.parentNode.remove() 
    }, 700)


    
    
})

/* O código abaixo, passava por cada elemento da lista(array) tabelaPacientes e ouvia os
 * eventos de duplo clicks.
*/

// tabelaPacientes.forEach(function(paciente) {
//     paciente.addEventListener('dblclick', function() {
     
//         let valor = paciente.textContent;
        
//         console.log(`Fui clicado! ${valor}`);
//         this.remove();
//     })
// })