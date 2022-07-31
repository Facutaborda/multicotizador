//Seccion Articulos
class articulo {
    constructor(id, nombre, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}

const kitEmergencias1 = new articulo("kitemergencias1", "Kit Reglamentario de Emergencias", "Kit para Auto 9 en 1", 8299);
const kitEmergencias2 = new articulo("kitEmergencias2", "Kit Reglamentario de Emergencias", "Kit para Auto 6 en 1", 7099);
const kitEmergencias3 = new articulo("kitEmergencias3", "Kit Reglamentario de Emergencias", "Kit para Auto sin matafuegos", 4299);
const matafuego = new articulo ("matafuego", "Matafuegos ABC 1kg", "Matafuegos para Auto - Sello Iram", 5199);
const fundaMatafuego = new articulo ("fundaMatafuego", "Funda Soporte", "Funda para Matafuegos con Velcro Estandar", 1799);
const fundaMatafuego2 = new articulo ("fundaMatafuego2", "Funda Soporte", "Funda para Matafuegos con Velcro Estandar", 1799);

let kitAuto = [kitEmergencias1, kitEmergencias2, kitEmergencias3];
let fuego =[matafuego,fundaMatafuego,fundaMatafuego2];

const totalArticulos = [kitAuto, fuego];

const $artKits = document.querySelector(".container__kits");
const $artFuego = document.querySelector(".container__fuego");

const art = [$artKits, $artFuego]
console.log(art);

for (i = 0; i<totalArticulos.length; i++){
    let html = "";
    for (articulos in totalArticulos[i]) {
        let articulo = totalArticulos[i][articulos];
        let img = articulo["id"];
        let nombre = articulo ["nombre"];
        let descripcion = articulo ["descripcion"];
        let precio = articulo ["precio"];
        let id = articulo ["id"];
        html += `
        <div class = "articulo">
        <img class = "articulo__img" src="/img/${img}.jpg" alt="">
        <h3 class = "articulo__h3">${nombre}</h3>
        <p class = "articulo__detalle">${descripcion}<br><span class = "articulo__precio"> $${precio}</span></p>
        <button class = "articulo__btn" id ="${id}">Agregar al carrito</button> 
        </div>
        `;
    }
    art[i].innerHTML = html;
}