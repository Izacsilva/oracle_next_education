let inputFiltro = document.querySelector('#filtroNome')

inputFiltro.addEventListener('input', function() {
    console.log(this.value)
    
    let pacientes = document.querySelectorAll('.paciente');
    
    if (this.value.length != 0) {
        for(let i = 0 ; i < pacientes.length ; i++) {
            let paciente = pacientes[i]
            let tdNome = paciente.querySelector('.info-nome')
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, 'i')

            if (!expressao.test(nome)) {
                paciente.classList.add('invisivel')
            } else {
                paciente.classList.remove('invisivel')
            }
        }
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove('invisivel')
        });
    }

    // for(let i = 0 ; i < pacientes.length ; i++) {
    //     let paciente = pacientes[i]
    //     let tdNome = paciente.querySelector('.info-nome')
    //     let nome = tdNome.textContent;
        
    //     if (this.value != nome) {
    //         paciente.classList.add('invisivel')
    //     }
    // }

})