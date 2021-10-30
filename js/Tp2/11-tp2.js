// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.


function pedirNombre(nombre){
   let valor = nombre=prompt('Ingrese el nombre');
    return valor;
}
function pedirEdad(edad){
    let valor = edad=prompt('Ingrese la edad');
     return valor;
     }

     alert('Primer Nombre y Edad')
     nombre1 = pedirNombre();
     edad1 = pedirEdad();

     alert('Segundo Nombre y Edad')
     nombre2=pedirNombre();
     edad2=pedirEdad();

     alert('Tercer Nombre y Edad')
     nombre3=pedirNombre();
     edad3=pedirEdad();

     const maximo = Math.max(edad1,edad2,edad3);

     if(maximo == edad1){
         document.write('El mayor es : ' + nombre1);
     }
     else if(maximo == edad2){
         document.write('El mayor es : ' + nombre2);
     }
     else {
         document.write('El mayor es : ' + nombre3)
     }
     
     
