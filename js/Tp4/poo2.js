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

class cuenta  {
  constructor( ){
    this.titular = 'Alex';
    this.saldo = 0;
  }
  ingresar(dineroIN){
    let ingreso = dineroIN = parseInt(prompt('Coloque el monto a ingresar '));
    return ingreso;
  }
  extraer(dineroOUT){
    let retiro = dineroOUT =  parseInt(!isNaN(prompt('Coloque el monto a retirar')));
    return retiro;
  }
  informar(){
    document.write('Saldo actual de la cuenta: ' + this.saldo)
  }

  get mostrarSaldo(){
    return this.saldo;
  }

  set newDeposit(deposito){
    this.saldo = deposito ;
  }



}
alert('Bienvenido')
let usuario = new cuenta()
usuario.informar();
do {
  let opcion = parseInt(prompt('Eliga una opcion: 0 (Deposito) - 1 (Extraccion) - 2 (Info Saldo)'));
  if(!isNaN(opcion) && opcion !=null){
    if( opcion >= 0 && opcion <= 2){
      switch(opcion){
        case 0:
          usuario.ingresar();
          usuario.newDeposit = parseInt(usuario.ingresar,usuario.newDeposit );
          usuario.informar();


      }

    }else {
  alert('Ingrese una opcion valida')
   }

  }else {
  alert('Ingrese una opcion valida')
   }

  
} while (condition);


