var altura=2;
let i=1;
/*Los árboles utópicos crecen de una forma particular, en dos ciclos:
Cada primavera duplican su tamaño
Cada verano crecen un metro*/

function alturaArbolUtopico(ciclos){
    let altura = 1;

    for(let i = 1; i<= ciclos; i++){
        if(i%2 === 0){
            altura ++;
        } 
        if (i%2 === 1){
            altura *= 2;
        }     
    }

return altura;
}

function usandoWhile(numero){
    let i = 0;
    while(i<numero){
        console.log(i + " iteracion ");
        i++;
    }
}


//funcion para validar formularios
