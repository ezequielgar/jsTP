// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numrep = parseInt(prompt('Ingrese un nro entre 1 a 50'));
if(!isNaN(numrep) && numrep != null && numrep >= 1 && numrep <= 50){
    for(let i = numrep; i >= 1 ; i--){
        for(let rep = i ; rep >= 1 ; rep--){
            document.write(i);

        }
        document.write('<br>');
    }
    }else{
        alert("El número introducido no es válido");
        alert("valor erroneo");
        

        
    
} 


    
