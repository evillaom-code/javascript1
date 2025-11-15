//Ingrespar n números y calcular el promedio de los números pares y de los números impares por separado.
function parimpar(){
  
 let n=parseInt(prompt("ingrese la cantidad de números "));    
 let par=[];
 let impar=[];
 let sumapar=0;
 let sumaimpar=0;
 let contadorpar=0;
 let contadorimpar=0;
  
  for (let i=0;i<n;i++){
   numeros=parseInt(prompt("ingrese el numero"));
   if(numeros%2===0){
     par.push(numeros);
     sumapar=sumapar+numeros;
     contadorpar=contadorpar+1;
     
   }else{
     impar.push(numeros);
     sumaimpar=sumaimpar+numeros;
     contadorimpar=contadorimpar+1;
   }

   promediopar=sumapar/contadorpar;
   promedioimpar=sumaimpar/contadorimpar;
   }

console.log(`Los numeros pares son (${par})y su promedio es de ${promediopar}`);
console.log(`Los numeros impares son (${impar})y su promedio es de ${promedioimpar}`);
}
parimpar();