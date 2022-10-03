function pedestre (semaforo) {
    try {
        let mensage = "";

        if (semaforo === "vermelho")
            mensage = "Espere";
        else if (semaforo === "verde")
            mensage = "Atravesse";
        else 
            mensage = "Farol Inoperante";
        return mensage;
    } catch (err) {
        err.message;
    }
}

console.log(pedestre("verdeo"));