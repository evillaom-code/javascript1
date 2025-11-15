//Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
function promedios(){
    let n=parseInt(prompt("ingrese la la cantidad de calificaciones"));
    let calificaciones=[];

    for(let i=0;i<n;i++){
        calificaciones[i]=parseFloat(prompt("ingrese la nota"));
    }

    //bluce para asignar calificaciones
       let suma=0;
       let c=0;
       

    for(let i=0;i<calificaciones.length;i++){
        if(calificaciones[i]>=70){
            suma+=calificaciones[i];
             c=c+1;
        }
      
  }
  let  promedio=suma/c;
  console.log(`El promedio es de :${promedio}`)
}
promedios();