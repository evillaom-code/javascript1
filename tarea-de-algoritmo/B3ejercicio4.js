//Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.        
  function tabla() {
  let numero = parseInt(prompt("Ingrese el número a multiplicar:"));
  let tabla = parseInt(prompt("Ingrese hasta qué número se multiplicará:"));

  console.log(`Tabla del ${numero} desde el 1 hasta el ${tabla}:`);
  //este sera el titulo al presentar la tabla
  for (let i = 1; i <= tabla; i++) {
    //permite empezar a multiplayer desde uno hasta el numero asignado
    console.log(`${numero} * ${i} = ${numero * i}`);
    //aca se presenta la tabla y el resultado 
  }
}
 tabla();