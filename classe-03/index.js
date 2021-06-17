const numeros = [54, 22, 14, 87, 10, 284];

let encontrado = false;
for(let i = 0; i < numeros.length; i++){
    const numero = numeros[i];

    if(numero === 10){
        encontrado = true;
        console.log(i);
        break;
    }
}
if(!encontrado){
    console.log("-1");
}