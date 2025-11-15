//Ingresar n números y contar cuántos son negativos.
function negativos(){
    let n=parseInt(prompt("imgrese la cantidad de numeros"));
    let c=0
    
    for(let i=0;i<n;i++){
        numeros=parseFloat(prompt("ingrese el numero"));
        if(numeros<0){
    
        c=c+1
       }
    }


    console.log(`La cantidad de numeros negativos son:${c}`);
}
negativos();










