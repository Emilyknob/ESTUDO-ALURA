function orçamentoFamiliar (ganhos, gastos){
   try {
        if (ganhos <= -1)
            throw new Error("Ganhos não pode ser um valor negativo!")
        if  (gastos <= -1)
            throw new Error("Gastos não pode ser um valor negativo!")

        mensage = "";
        console.log(ganhos);

        if (ganhos > gastos)
            mensage = "Você está dentro do orçamento!";
        else if (gastos > ganhos)
            mensage = "Você está fora do orçamento! Não gaste mais!";
        return mensage;

   } catch (err) {
        err.message;
   }
}

console.log(orçamentoFamiliar(-1, 75));