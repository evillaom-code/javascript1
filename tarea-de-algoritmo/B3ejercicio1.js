//Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
function promedio(){
    let n=parseInt(prompt("ingrese la cantidad de notas"));
    let prom="";
    let acu=0;
    let c=0;
    for(let i=0;i<n;i++){
        notas=parseInt(prompt("ingrese la nota"));
    
        if(notas>=70){
            acu=notas+acu;
            c=c+1;
        }
        prom=acu/c;
      
    } 
  console.log(`El promedio es de ${prom}`)
}
promedio();