// Contar caracteres de varias frases publicitarias
//dado un arreglo con frases publicitarias, contar cuántos caracteres tiene cada una.
   function contar(){
    //entrada
    let n=parseInt(prompt("ingrese la cantidad de frases"));
    //ingrese cuantos nombres habra
    let frase=[];

    for(let i=0; i<n;i++){
    frase[i]=prompt("ingrese la frase");
    // agrega nombre al arreglo
    }
    let c=0;
   

    for(let i=0;i<n;i++){
      //permite sacar los caracteres a todas las frases
     let caracteres=frase[i].length;
      c=i
    

console.log(`la frase ${c} : ${frase[i]} tiene ${caracteres} caracteres`)
}
   }
contar()
