// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.


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
    
    alert(mensaje + this.saldo)
  }
}



alert('Bienvenido');
let cuenta = new Cuentas('Alex', 0);
let salir = false;

cuenta.Informar('Saldo actual de la cuenta: ');
do {
  let opcion = parseInt(prompt('Eliga una opcion: 0 (Deposito) - 1 (Extraccion) - 2 (Info Saldo) - 3 (Salir)'));
  
  switch(opcion){
    case 0:
      cuenta.Ingresar(parseInt(prompt('Coloque el monto a ingresar ')));
      console.log(this.saldo);
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
  
} while (!salir);


