// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numero = 0 ;
let suma = 0 ;
do {
    numero = prompt('Ingrese un nro');
    console.log(numero);
    if(!isNaN(numero && numero != null)){
        suma = numero + parseInt(numero);
        console.log(suma);

    }else {
        alert('El dato ingresado , no es un numero');
    }
}while(numero != null);
confirm('Desea continuar');