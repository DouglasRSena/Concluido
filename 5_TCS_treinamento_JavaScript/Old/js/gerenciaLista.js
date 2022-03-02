function verificaLista(){
    let pacientesLista = document.querySelectorAll(".paciente");

    for (let item = 0; item < pacientesLista.length; item++){
        let paciente = pacientesLista[item];
        let peso = paciente.querySelector(".info-peso").textContent;
        let altura = paciente.querySelector(".info-altura").textContent;
        let imc = paciente.querySelector(".info-imc");
        let deuErro = validaPaciente(peso, altura);

        if(deuErro){
            imc.textContent = deuErro;
            paciente.classList.add("paciente-invalido")
        }else{
            imc.textContent = calculaImc(peso, altura);
        }
    }
}

function validaPaciente(nome, peso, altura, gordura){
    let paciente = [nome, peso, altura, gordura];

    
    
    
    if(peso <= 0 || peso >= 1000){
        return "O peso é inválido";
    }else if(altura <= 0 || altura >= 3){
        return "A altura é inválida";
    }else{
        return false;
    }
}

verificaLista();