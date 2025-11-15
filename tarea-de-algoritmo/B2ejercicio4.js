//Dado un arreglo con nombres de ciudades, identificar cuál tiene más letras.
function ciudades(){
let n=parseInt(prompt("ingrese la cantidad de nombres"));
let nombres=[];
//nombres de ciudades

for(let i=0;i<n;i++){
    nombres[i]=prompt("ingrese el nombre");
    //arreglo para encontar las ciudades 
}

let mayor=nombres[0];
let caracteres=mayor.length;

for(let i=0;i<nombres.length;i++){
    if(mayor.length<nombres[i].length){
        mayor=nombres[i];
        caracteres=mayor.length
    }
}
   
   
    
    
    console.log(`La ciudad con mas letras es :${mayor} con ${caracteres}.`)

}
ciudades();