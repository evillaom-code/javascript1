//Dada una lista de números, contar cuántos son negativos.
function contarneg(){
let n=parseInt(prompt("ingrrese cuantos numeros se contaran"));
let numeros=[];
//aki van los numeros
let negativos=[];
//aki van los negativos

for( let i=0;i<n;i++){
numeros[i]=parseFloat(prompt("ingrese el numero"));
//bucle para asignar numeros

}
c=0;
//contador
    for( let i=0; i<numeros.length;i++){
        //ciclo que recoore todo el arreglo
        if(numeros[i]<0){
            negativos+=numeros[i]
            //si numero es menor a cero es negativo
            c=c+1
            //contador 
        }
 
   }
   console.log(`Tiene ${c} numeros negativos y son ( ${negativos} ).`);
}
contarneg();





