//Dada una lista con edades de personas, obtener el promedio de los mayores de edad (≥ 18) y de los menores de edad (< 18).
function edades(){
    
    let n = parseInt(prompt("Ingrese cuántas edades habrá:"));
    let edades = [];
    let sumaMayores = 0;
    let sumaMenores = 0;
    let cma = 0; 
    // contador de mayores
    let cme = 0;
     // contador de menores


    for(let i = 0; i < n; i++){
        edades[i] = parseInt(prompt("Ingrese la edad"));
    }


    for(let i = 0; i<edades.length; i++){
        if(edades[i]>=18){
            sumaMayores += edades[i];
            cma=cma+1;
        } else {
            sumaMenores += edades[i];
            cme=cme+1;
        }
    }

    let promedioMayores = sumaMayores / cma ;
    let promedioMenores = sumaMenores / cme ;

    console.log(`Promedio de mayores de edad: ${promedioMayores}`);
    console.log(`Promedio de menores de edad: ${promedioMenores}`);

}
edades();
