//Contar apariciones de una vocal en un título
//Entrada: "Programación avanzada"
//Salida: "La vocal 'a' aparece 5 veces."
function vocale(){
    //entrada
    let frase=prompt("ingrese la frase");
    // que hubole
    // 0123456789
    
    let vocal=prompt("ingrese la vocal");
    // la vocl que se buscara y contara
    let cc=0;
    // contador de vocal
    for(let i=0;i<frase.length;i++){
        //recorrer toda la frase
        if(frase[i] === vocal){
         //letra una por una = a vocal que se buscara
            cc=cc+1
        }
    }


console.log(`En la frase la vocal ${vocal} se repite ${cc} veces.`)
}
vocale()
