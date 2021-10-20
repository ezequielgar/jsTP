//6) Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor
let mayor1 = parseInt(prompt("Ingrese 3° nro"));
let mayor2 = parseInt(prompt("Ingrese 4° nro"));
if(mayor1 > mayor2){
    document.write("El nro mayor es el : " + mayor1);
}
    else {
        if(mayor2 == mayor1){
            document.write("Son numeros iguales");

        }
        else{

            document.write("El nro mayor es el : " + mayor2);
        }

}