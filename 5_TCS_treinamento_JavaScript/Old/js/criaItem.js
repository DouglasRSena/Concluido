let tabela = document.querySelector("#tabela-pacientes");
let botaoAdicionar = document.querySelector("#adicionar-paciente");
        botaoAdicionar.addEventListener("click", obtemDadosFormulario);

function obtemDadosFormulario(event){
    event.preventDefault();
    
    let formulario = document.querySelector("#form-adiciona");
    let avisoErro = document.querySelector("#aviso-erro");
    let dados = validaPaciente(formulario.peso.value, formulario.altura.value);
   
    if(!dados){
        let paciente = {
            nome: formulario.nome.value,
            peso: formulario.peso.value,
            altura: formulario.altura.value,
            gordura: formulario.gordura.value,
            imc: calculaImc (formulario.peso.value, formulario.altura.value)
        }
        montaTr(paciente);
        formulario.reset();

        }else{
            
            let notifica = document.createElement("li");
            notifica.textContent = dados;
            avisoErro.appendChild(notifica);

        }
}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    tabela.appendChild(pacienteTr)
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
