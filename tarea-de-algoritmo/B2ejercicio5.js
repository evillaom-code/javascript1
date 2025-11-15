//Dado un arreglo con nombres de cargos profesionales, obtener las iniciales de cada uno.
function iniciales(){
   let n=parseInt(prompt("ingrese la cantidad de cargos"));
   let cargos=[];

  for(let i=0;i<n;i++){
      cargos[i]=prompt("ingrese el cargo");
  }
  for(let i=0;i<cargos.length;i++){
     let cargosolo=cargos[i].split(" ");
     let inicial="";

     for(let j=0;j<cargosolo.length;j++){
        inicial+=cargosolo[j][0];
     }

  
    console.log(`El cargo( ${cargos[i]} )→ ${inicial} `);
    }  

  }
iniciales();  