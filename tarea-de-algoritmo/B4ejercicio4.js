  // Dada una lista de números, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
function tabla() {
    let n = parseInt(prompt("ingrese la cantidad de números"));
    let numeros = [];
    let tabla = parseInt(prompt("ingrese hasta qué número se multiplicará cada tabla"));

    for (let i = 0; i < n; i++) {
        numeros[i] = parseInt(prompt(`ingrese el número a multiplicar`));
    }

     for (let j = 0; j < numeros.length; j++) {
        console.log(`Tabla del ${numeros[j]} desde el 1 hasta el ${tabla}:`);
        
        for (let a = 1; a <= tabla; a++) {
            console.log(`${numeros[j]} * ${a} = ${numeros[j] * a}`);
        }
    }
}
tabla();