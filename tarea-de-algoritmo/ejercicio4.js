//Dado un arreglo con nombres de ciudades, identificar cuál tiene más letras.
//Entrada:["Milagro", "Guayaquil", "Quito", "Cuenca"]
//Salida:"La ciudad con más letras es 'Guayaquil' (9 letras)."
function longitud(){
    let nombre1=prompt("ingrese los nombres");
    let nombre2=prompt("ingrese los nombres");
    
   
    if(nombre1.length>nombre2.length){
       console.log(`La ciudad :${nombre1} tiene mas caracteres( ${nombre1.length} ).`);
    }else {
        console.log(`La ciudad :${nombre2} tiene mas caracteres( ${nombre2.length} ).`);
    }
    
}
longitud();