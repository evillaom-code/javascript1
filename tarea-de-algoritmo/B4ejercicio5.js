//Dada una lista de números, calcular el promedio de los pares y de los impares.
function parimpar(){
  
 let n=parseInt(prompt("ingrese la cantidad de números "));    
 let numeros=[];

  for (let i=0;i<n;i++){
   numeros[i]=parseInt(prompt("ingrese el numero"));

}
let par=[];
let impar=[];
let sumapar=0;
let sumaimpar=0;
let contadorpar=0;
let contadorimpar=0;
  

 for (let i=0; i<numeros.length; i++){
   if(numeros[i]%2===0){
     par.push(numeros[i]);
     sumapar=sumapar+numeros[i];
     contadorpar=contadorpar+1;
     
   }else{
     impar.push(numeros[i]);
     sumaimpar=sumaimpar+numeros[i];
     contadorimpar=contadorimpar+1;
   }
}
   promediopar=sumapar/contadorpar;
   promedioimpar=sumaimpar/contadorimpar;
   
console.log(`Los numeros pares son (${par})y su promedio es de ${promediopar}`);
console.log(`Los numeros impares son (${impar})y su promedio es de ${promedioimpar}`);
}
parimpar();