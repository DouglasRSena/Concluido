var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() { // busca uma entrada/input no FiltrarTabela
    
    var pacientes = document.querySelectorAll(".paciente");//informo quem são os dados/pacientes

    if (this.value.length > 0) { //se o valor do Input do filtro, form maior que zero faz isso!

        for (var i = 0; i < pacientes.length; i++) { //executar um loop para todos os pacientes, independente de quantos são
            var paciente = pacientes[i];//contador de paciente e pula pro próx
            var tdNome = paciente.querySelector(".info-nome"); //Pega um campo específico
            var nome = tdNome.textContent;//Considera só o contéudo do campo
            var expressao = new RegExp(this.value, "i");// Nova experessão regular, irá definir onde eu busco e se é Case insesive ou sensive (diferencia o conteúdo, maiusculu e minusculo)

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else { // Se o valor do input não for maior que zero, faz isso!
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
