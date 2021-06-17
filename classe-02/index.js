const letras = ["A", "a", "B", "C", "E", "e"];

let quantidade = 0
for(let letra of letras){
    if(letra === "E" || letra === "e"){
        quantidade += 1;
    }
}
if(quantidade === 0){
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else if(quantidade === 1){
    console.log('Foi encontrada 1 letra "E" ou "e".');
} else {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
}