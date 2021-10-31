// Crear objetos

// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.



let auto = {
    color:'blanco nacre',
    marca:'Citroen',
    modelo:'C4 Cactus Feel',
    motorOn: 'Apagado',
    onOff:function(action){
        let turnOnOff = action =parseInt( prompt('Eliga una opcion: 0 (Encender) - 1 (Apagar) - 2 (Cancelar)'));
        if (!isNaN(turnOnOff && turnOnOff != null)){

            switch(turnOnOff){
                case 0:
                    alert('Vehiculo Encendido');
                    turnOnOff = 'Encendido';
                    break;
                    
                    case 1:
                        alert('Vehiculo Apagado');
                        turnOnOff = 'Apagado'
                        break;
                        case 2:
                            alert('Se cancela accion')
                            break;
                            default:
                                alert('Accion incorrecta');            
                            }
                        }else {
                            alert('Ingrese una opcion valida')
                        }
        return turnOnOff;
    }
       
}

auto.motorOn = auto.onOff();

console.log(auto['motorOn'])