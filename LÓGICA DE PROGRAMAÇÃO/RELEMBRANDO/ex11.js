function signo(dia, mes){
    let msg = "";

    if(data >= 21.01 && data <= 19.02)
        msg = "seu signo é Aquário";
    else if(data >= 21.03 || data <= 20.04)
        msg = "seu signo é Áries";
    else if(data >= 21.04 || data <= 20.05)
        msg = "seu signo é Touro";
    else if(data >= 21.05 || data <= 20.06)
        msg = "seu signo é Gêmeos";
    else if(data >= 21.06 || data <= 22.07)
        msg = "seu signo é Câncer";
    else if(data >= 23.07 || data <= 22.08)
        msg = "seu signo é Leão";    
    else if(data >= 23.08 || data <= 22.09)
        msg = "seu signo é Virgem";
    else if(data >= 23.09 || data <= 22.10)
        msg = "seu signo é libra";
    else if(data >= 23.10 || data <= 21.11)
        msg = "seu signo é Escorpião";
    else if(data >= 23.11 || data <= 21.12)
        msg = "seu signo é Sargítario";
    else if(data >= 22.12 || data <= 20.01)
        msg = "seu signo é Capricónio";
    else if(data >= 19.02 || data <= 20.01)
        msg = "seu signo é Peixes";
    return msg;
}

console.log(signo(09.08));
