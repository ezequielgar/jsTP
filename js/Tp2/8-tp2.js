// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

function valorFalse(){
    alert('El valor ingresado no es correcto');
}

let numrep = parseInt(prompt('Ingrese un nro de repeticiones no mayor a 50'));
console.log('Nro ingresado : ' + numrep)
if(!isNaN(numrep) && numrep != null  ){
    if (numrep >= 1 && numrep <= 50){
        for (let i = 0; i <= numrep; i++) {
            for (let rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    }else{
        valorFalse();
    }
}else{
    valorFalse();
}

