//Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
function vocale(){
    //entrada
    let n=parseInt(prompt("ingrese cuantas frases habra"));
    let vocal=prompt("ingrese la vocal a buscar");
    let frases=[];
    //aqui iran las frases
    


    for(let i=0;i<n;i++){
           frases[i]=prompt("ingrese la frase");
          //frases del arreglo
         }
          

         for(let i=0;i<frases.length;i++){

          //recorrer todas las frases
         let c=0;
         let fraseind=frases[i];
         //permite escoger una frase por una
         
          for(let j=0; j<fraseind.length;j++){

            //recorre cada letra de la frase escogida
            if(fraseind[j] === vocal){
         //letra una por una = a vocal que se buscara
            c=c+1;
            //se suman las vocales de una frase
         }
          }
        //sale una frase por una con la cantidad de vocales 


console.log(`En la frase ( ${fraseind} ) la vocal ( ${vocal} ) se repite ${c} veces.`)
        }    
}
vocale();