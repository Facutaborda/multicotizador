do {
    nombreCliente = prompt("¡Hola! Bienvenido/a a MULTICOTIZADOR.ONLINE!, cual es su nombre?:");
} while (nombreCliente === "");

let seleccion1 = prompt("Bienvenido/a " + nombreCliente + " a MULTICOTIZADOR.ONLINE! \n\n ¿Te gustaria conocer nuestros beneficios antes de realizar una compra? \n1 - Si \n2 - No  \n \n \n -Si eliges NO accederas directamente a nuestra tienda.-");

if (seleccion1 == "1" || seleccion1 == "si") {

    let seleccion2 = Number(prompt("¡Genial!, adquiriendo su seguro con nosotros cuenta con varios beneficios a la hora de abonar \n\n Por favor indique el tipo de seguro en el que esta interesado:\n1- Auto \n2- Moto\n3- Taxi - Remis\n4- Area protegida\n\n ingrese ESC para salir"));
    while (seleccion2 < 5) {
        switch (seleccion2) {
            case 1:
                alert("Actualmente para seguros de Auto tenemos la promocion de responsabilidad Civil en $1990/mes, y los mejores precios para las demas coberturas!! \n\n No dude en consultarnos por mas beneficios exclusivos!");
                break;
            case 2:
                alert("Actualmente para seguros de Moto tenemos la promocion de responsabilidad Civil en $420/mes, y los mejores precios para las demas coberturas!! \n\nNo dude en consultarnos por mas beneficios exclusivos!");
                break;
            case 3:
                alert("Actualmente para seguros de Taxi tenemos la promocion de responsabilidad Civil en $2990/mes, y los mejores precios para las demas coberturas!! \n\nNo dude en consultarnos por mas beneficios exclusivos!");
                break;
            case 4:
                alert("Actualmente para seguros de Areas Protegidas contamos con una promocion en $220/mes, y los mejores precios para las demas coberturas!! \n\nNo dude en consultarnos por mas beneficios exclusivos!");
                break;
            default:
                alert("Por favor selecciona una de las cuatro opciones utilizando solamente el numero de opcion.")
                break;
        }
        seleccion2 = Number(prompt("Por favor indique el tipo de seguro en el que esta interesado:\n1- Auto \n2- Moto\n3- Taxi - Remis\n4- Area protegida \n\n ingrese ESC para salir"))
    }
} else {
    alert("¡Perfecto! continue con su compra.");
};  
class seguro {
    constructor(id, nombre, precio, categoria) {
        this.id = Number(id);
        this.nombre = nombre;
        this.precio = Number(precio);
        this.categoria = categoria;
    }
    valor() {
        alert("El valor del seguro seleccionado es $" + this.precio);
    }
}

const rcMoto = new seguro(1, "R. Civil Moto", 420, "moto");
const rcAuto = new seguro(2, "R. Civil Auto", 1990, "auto");
const rcTaxi = new seguro(3, "R. Civil Taxi", 2990, "taxi");
const areaProt = new seguro(4, "Area Protegida", 220, "area protegida");
const pickUp = new seguro(5, "R. Civil Pick Up", 1990, "pick up");
const camion = new seguro(6, "R. Civil Camion h/10 Tns", 4600, "camion");
const acoplados = new seguro(7, "R. Civil Acoplados", 1790, "acoplado");
const casaRodante = new seguro(8, "R. Civil Casa Rodante", 1850, "casa rodante");
const trailer = new seguro(9, "R. Civil Trailer", 890, "Trailer");
const transporteEscolar = new seguro(10, "R. Civil Transporte Escolar", 3990, "transporte escolar");




const carrito = []

let agregarSeguro = () => {
    let seguroElegido = prompt("Ingrese el seguro que desea contratar: \n1- R. Civil Moto \n2- R. Civil Auto\n3- R. Civil Taxi - Remis\n4- Area protegida");

    while (seguroElegido != "salir") {

        switch (seguroElegido) {
            case '1':
                rcMoto.valor();
                carrito.push(rcMoto);
                seguroElegido = "salir";
                break
            case '2':
                rcAuto.valor();
                carrito.unshift(rcAuto);
                seguroElegido = "salir";
                break
            case '3':
                rcTaxi.valor();
                carrito.push(rcTaxi);
                seguroElegido = "salir";
                break
            case '4':
                areaProt.valor();
                carrito.push(areaProt);
                seguroElegido = "salir";
                break
            default:
                seguroElegido = prompt("Por favor ingresa un valor correcto, del seguro que desea contratar: \n1- R. Civil Moto \n2- R. Civil Auto\n3- R. Civil Taxi - Remis\n4- Area protegida");
        }
    }
    if (confirm("¿Desea contratar otro seguro?")) {
        agregarSeguro()
    } else {
        alert("Su total es de $ " + totalSeguros() + ".")
    }
}
const eliminarProducto = () => {
    let productoEliminar = prompt("Si desea eliminar un producto, ingrese el codigo del producto: \n1 - R.C. Moto \n2 - R.C. Auto\n3 - R.C. Taxi\n4 - Area Protegida ")

    let num = 0;
    carrito.forEach((seguro) => {

        if (seguro.id == productoEliminar) {
            carrito.splice(num, 1);
            num += 1;
        } else {
            num += 1;
        }
    })
}

const totalSeguros = () => {
    let sumaTotal = 0;
    carrito.forEach((seguro) => {
        sumaTotal += seguro.precio
    })
    return sumaTotal;
}

agregarSeguro();
eliminarProducto();
alert ("Su total actualizado es de $ " + totalSeguros())

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}
for (seguro of carrito) {
    let nombreCobertura = (seguro.id + " - " + seguro.nombre + " $" + seguro.precio + ", ");
    console.log(nombreCobertura)
}



// Implementando busqueda
const vehiculosRC = [rcAuto, rcMoto, rcTaxi, areaProt, pickUp, camion, acoplados, casaRodante, trailer, transporteEscolar];

let encontrar = prompt("Ingrese el vehiculo que desa asegurar contra Responsabilidad Civil").toLocaleLowerCase();
let buscarSeguro = vehiculosRC.find((seguro) => seguro.categoria == encontrar);
console.log(buscarSeguro);