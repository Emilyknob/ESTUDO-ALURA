function parcelas (valorDaCompra, numeroDeParcelas){
    let mensage = "";
    let resultado = valorDaCompra/numeroDeParcelas;

    if (numeroDeParcelas > 0 && valorDaCompra > 0)
        mensage = `Sua compra de R$${valorDaCompra} em ${numeroDeParcelas}x de R$${resultado} foi concluída`;
    else 
        mensage = "Por favor informar valor valido";
    return mensage;
}

console.log(parcelas(0, 10));