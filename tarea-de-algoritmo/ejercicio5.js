//Obtener iniciales de un cargo profesional
//Entrada: "Director General Académico"
//Salida: "D.G.A."
function iniciales(){
    let nomcompleto=prompt("ingrese nombre");
    //nombre completo del cargo
    let nombre=nomcompleto.split(" ");
    // separaramos como un arreglo despues del espacio 
    let inicial="";
    //iniciales
    
    for(let i=0; i<nombre.length;i++){
        if(nombre[i]!==""){
      inicial+=nombre[i][0]
        }
    }
        console.log(`las iniciales son: ${inicial}`);
    }
iniciales()
