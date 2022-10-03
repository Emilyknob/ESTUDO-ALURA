function maiorDeTres (x, y, z){
    var mensage = "";

    if (x > y && x > z)
        mensage = `O número ${x} é maior que ${y} e ${z} `;
    else if (y > x && y > z)
        mensage = `O número ${y} é maior que ${x} e ${z} `;
    else if (z > x && z > y)
        mensage = `O número ${z} é maior que ${y} e ${x} `;
    return mensage;
}

var teste1 = maiorDeTres(10, 9, 8);
var teste2 = maiorDeTres(5, 7, 2);
var teste3 = maiorDeTres(12, 15, 20);

console.log(teste2);