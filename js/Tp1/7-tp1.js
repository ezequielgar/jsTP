// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let n1 = parseInt(prompt("Ingrese 1° nro"));
let n2 = parseInt(prompt("Ingrese 2° nro"));
let n3 = parseInt(prompt("Ingrese 3° nro"));

console.log("Numero seleccionado: " + n1);
document.write("<br>");
console.log("Numero seleccionado: " + n2);
document.write("<br>");
console.log("Numero seleccionado: " + n3);
document.write("<br>");

if(n1 > n2 && n1 > n3){
    document.write("El número mayor es : " + n1);
    }
    else if(n2 > n3){
        document.write("El número mayor es : " + n2);
    }
    else{
        document.write("El númeor mayor es : " + n3)
    }
