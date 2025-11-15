//Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
function edades(){
    let n = parseInt(prompt("Ingrese cuántas edades habrá:"));
    
    let sumaMayores = 0;
    let sumaMenores = 0;
    let cma = 0; 
    // contador de mayores
    let cme = 0;
     // contador de menores

    for (let i = 1; i <= n; i++) {
        let edad = parseInt(prompt("Ingrese la edad "));

        if (edad >= 18) {
            sumaMayores += edad;
            cma++;
        } else {
            sumaMenores += edad;
            cme++;
        }
    }

    let promedioMayores = sumaMayores/cma;
    let promedioMenores = sumaMenores/cme;

    console.log(`Promedio de mayores de edad: ${promedioMayores}`);
    console.log(`Promedio de menores de edad: ${promedioMenores}`);
}
edades();

