// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// let cuenta = {
//   titular: "Alex",
//   saldo: 0,
//   ingresar: function (ingreso) {
//     let dinero = (ingreso = parseInt(
//       prompt("Ingrese la cantidad de $ a ingresar")
//     ));
//     return dinero;
//   },
//   extraer: function (extraccion) {
//     let dinero = (extraccion = parseInt(prompt("Ingrese el monto a extraer")));
//     return dinero;
//   },
//   informar: function () {
//     do {
//       let opcion = parseInt(
//         prompt(
//           "Eliga una opcion: 1 (Info de la cuenta) - 2 (Deposito) - 3 (Extraccion)"
//         )
//       );

//       if (!isNaN(opcion && opcion != null)) {
        
//         switch (opcion) {
//           case 1:
//             document.write("<br>Saldo actual: " + cuenta.saldo);
//             break;

//           case 2:
//             cuenta.ingresar();
//             cuenta.saldo = cuenta.ingresar + cuenta.saldo;
//             document.write('Saldo actual: ' + cuenta.saldo)
//             break;

//           case 3:
//             if (cuenta.saldo <= 0) {
//               alert("Error de Operacion- Su Saldo es 0");
//             } else {
//               cuenta.extraer();
//               if (cuenta.saldo > cuenta.extraer) {
//                 cuenta.saldo = cuenta.extraer - cuenta.saldo;
//               } else {
//                 alert("Error de operacion, su saldo es de : " + cuenta.saldo);
//               }
//               break;
//             }
//           default:
//             alert("Accion incorrecta");
//         }
//       } else {
//         alert("Ingrese una opcion valida");
//       }
//     } while (opcion = 0);
//     confirm("Desea continuar");
//   },
// };
// cuenta.informar();

class Cuentas  {
  constructor(nombre, saldoInicial){
    this.titular = nombre;
    this.saldo = saldoInicial;
  }

  Ingresar(dineroIN){
    this.saldo = this.saldo + dineroIN;
  }

  Extraer(dineroOUT){
    if ( this.saldo < dineroOUT ){
      alert('Operacion no valida')
      return;
    }
    this.saldo -= dineroOUT;
  }

  Informar(mensaje){
    // document.write('Saldo actual de la cuenta: ' + this.saldo)
    alert(mensaje + this.saldo)
  }
}



alert('Bienvenido');
let cuenta = new Cuentas('Alex', 0);
let salir = false;

cuenta.Informar('Saldo actual de la cuenta: ');
do {
  let opcion = parseInt(prompt('Eliga una opcion: 0 (Deposito) - 1 (Extraccion) - 2 (Info Saldo) - 3 (Salir)'));
  // if(!isNaN(opcion) && opcion !=null){
  //   if( opcion >= 0 && opcion <= 2){
  switch(opcion){
    case 0:
      cuenta.Ingresar(parseInt(prompt('Coloque el monto a ingresar ')));
      cuenta.Informar('Saldo actualizado: ');
      break;
    
    case 1:
      cuenta.Extraer(parseInt(prompt('Coloque el monto a retirar'))); 
      cuenta.Informar('Saldo actualizado: ');
      break;

    case 2:
      cuenta.Informar('Saldo actual de la cuenta: ');
      break;

    case 3:
      salir = true;
      break;

    default:
      alert('Ingrese una opcion valida')
      break;
  }

  //   }else {
  // alert('Ingrese una opcion valida')
  //  }

  // }else {
  // alert('Ingrese una opcion valida')
  //  }

  
} while (!salir);


