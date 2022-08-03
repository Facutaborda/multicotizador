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
const matafuego = new articulo("matafuego", "Matafuegos ABC 1kg", "Matafuegos para Auto - Sello Iram", 5199);
const fundaMatafuego = new articulo("fundaMatafuego", "Funda Soporte", "Funda para Matafuegos con Velcro Estandar", 1799);
const fundaMatafuego2 = new articulo("fundaMatafuego2", "Funda Soporte", "Funda para Matafuegos con Velcro Estandar", 1799);

let kitAuto = [kitEmergencias1, kitEmergencias2, kitEmergencias3];
let fuego = [matafuego, fundaMatafuego, fundaMatafuego2];

const articulosNecesarios = [kitEmergencias1, kitEmergencias2, kitEmergencias3, matafuego, fundaMatafuego, fundaMatafuego2];

const totalArticulos = [kitAuto, fuego];

console.log(articulosNecesarios);

const $artKits = document.querySelector(".container__kits");
const $artFuego = document.querySelector(".container__fuego");

const art = [$artKits, $artFuego]

const divcarrito = (articulos) => {
    const divCarrito = document.querySelector('.carrito_compras_container')
    articulos.forEach(articulo => {
        const div = document.createElement('div');
        div.classList.add('articulo');
        div.innerHTML = `
        <div class = "articulo">
            <img class = "articulo__img" src="/img/${articulo.id}.jpg" alt="">
            <h3 class = "articulo__h3">${articulo.nombre}</h3>
            <p class = "articulo__detalle">${articulo.descripcion}<br><span class = "articulo__precio"> $${articulo.precio}</span></p>
            <button class = "articulo__btn" id ="${articulo.id}">Agregar al carrito</button> 
        </div>
        `
        divCarrito.appendChild(div)
    });
}
divcarrito(articulosNecesarios)


for (i = 0; i < totalArticulos.length; i++) {
    let html = "";
    for (articulos in totalArticulos[i]) {
        let articulo = totalArticulos[i][articulos];
        let img = articulo["id"];
        let nombre = articulo["nombre"];
        let descripcion = articulo["descripcion"];
        let precio = articulo["precio"];
        let id = articulo["id"];
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
// Eventos
const botoncompra = document.querySelectorAll('.articulo__btn')
console.log(botoncompra);
const kit1 = document.getElementById('kitemergencias1');
const kit2 = document.getElementById('kitEmergencias2');
const kit3 = document.getElementById('kitEmergencias3');
const mat = document.getElementById('matafuego');
const funda1 = document.getElementById('fundaMatafuego');
const funda2 = document.getElementById('fundaMatafuego2');
const carrito = [];



kit1.addEventListener('click', () => {
    alert(`Se agrego ${kitEmergencias1.nombre} al carrito`);
    carrito.push(kitEmergencias1);
});
kit2.addEventListener('click', () => {
    alert(`Se agrego ${kitEmergencias2.nombre} al carrito`);
    carrito.push(kitEmergencias2);
});
kit3.addEventListener('click', () => {
    alert(`Se agrego ${kitEmergencias3.nombre} al carrito`);
    carrito.push(kitEmergencias3);
});
mat.addEventListener('click', () => {
    alert(`Se agrego ${matafuego.nombre} al carrito`);
    carrito.push(matafuego);
});
funda1.addEventListener('click', () => {
    alert(`Se agrego ${fundaMatafuego.nombre} al carrito`);
    carrito.push(fundaMatafuego);
});
funda2.addEventListener('click', () => {
    alert(`Se agrego ${fundaMatafuego2.nombre} al carrito`);
    carrito.push(fundaMatafuego2);
});


console.log(carrito);

/* const lista = (articulos) => {
    const $listaCarrito = document.querySelector(".lista__carrito");
    const modalCarrito = () => {
        let articulo = 
    }

} */