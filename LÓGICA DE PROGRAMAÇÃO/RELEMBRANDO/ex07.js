function IrAoParque (temperatura){
    let mensage = "";

    if (temperatura >= 30 || temperatura >= 23)
        mensage = "Você deve ir ao parque";
    else 
        mensage = "Você não deve ir ao parque";
    return mensage;
}

console.log(IrAoParque(21));