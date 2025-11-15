//Invertir un nombre de producto
//Entrada: "Laptop"
//Salida: "potpaL"
function invertido(){
    //entrada
    let frase=prompt("ingrese la frase");
    // que hubole
    // 0123456789
    let lon=frase.length;
    let inv="";
    // la frase invertida
  for(let i=lon-1;i>=0;i--){
    inv=inv+frase[i];
  }

console.log(`En la frase era ${frase} `)
console.log(`Invertida se ve ${inv} .`)
}
invertido();
