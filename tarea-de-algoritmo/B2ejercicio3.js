//Dado un arreglo con nombres de productos, mostrar cada uno invertido.
function invertidosf(){
    //entrada
    let n=prompt("ingrese la cantidad de frases");
    let frases=[];
    //aqui iran las frases
    let invertidos=[];
    //aki las invertidas

    for(let i=0;i<n;i++){
           frases[i]=prompt("ingrese la frase");
          //frases del arreglo
    }

    for(let i=0;i<frases.length;i++){
        //frases del arreglo seleccionar
           let frase=frases[i];
           let lon=frase.length;
           
          //aqui iran las frases invertidas
           let invertida=""

          for(let j=lon-1;j>=0;j--){
           invertida+=frase[j];
           }
           
           invertidos.push(invertida);
        }
for (let i = 0; i < frases.length; i++) {      
    
    console.log(`La frase original es : ${frases[i]} e invertida seria : ${invertidos[i]}`);
}
    
}

invertidosf();