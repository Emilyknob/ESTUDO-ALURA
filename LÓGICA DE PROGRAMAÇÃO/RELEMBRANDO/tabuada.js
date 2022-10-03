function tabuada (tabuadaDo){
    let mensage = "";

    for (let cont1 = 0; cont1 <= 10; cont1++){
        let result = tabuadaDo * cont1;
        mensage = `${tabuadaDo} x ${cont1} = ${result}`;
        console.log(mensage);
    }
}

console.log(tabuada(10));

