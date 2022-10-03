function febre (graus) {
    mensage = "";

    if (graus > 37)
        mensage = "Está com febre!"
    else if (graus == 37)
        mensage = "Temperatura normal!"
    else if (graus < 35)
        mensage = "Temperatura corporal em estado de hipotermia!"
    
    return mensage;
}

console.log(febre(37));