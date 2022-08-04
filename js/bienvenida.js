//Seccion Articulos
class articulo {
    constructor(id, nombre, descripcion, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.cantidad = Number(cantidad);
    }
}
const kitEmergencias1 = new articulo("kitemergencias1", "Kit Reglamentario de Emergencias", "Kit para Auto 9 en 1", 8299, 10);
const kitEmergencias2 = new articulo("kitEmergencias2", "Kit Reglamentario de Emergencias", "Kit para Auto 6 en 1", 7099, 10);
const kitEmergencias3 = new articulo("kitEmergencias3", "Kit Reglamentario de Emergencias", "Kit para Auto sin matafuegos", 4299, 10);
const matafuego = new articulo("matafuego", "Matafuegos ABC 1kg", "Matafuegos para Auto - Sello Iram", 5199, 10);
const fundaMatafuego = new articulo("fundaMatafuego", "Funda Soporte", "Funda para Matafuegos con Velcro Estandar", 1799, 10);
const fundaMatafuego2 = new articulo("fundaMatafuego2", "Funda Soporte", "Funda para Matafuegos con Velcro Estandar", 1799, 10);


const articulosNecesarios = [kitEmergencias1, kitEmergencias2, kitEmergencias3, matafuego, fundaMatafuego, fundaMatafuego2];


const divcarrito = (articulos) => {
    const divCarrito = document.querySelector('.carrito_compras_container')
    articulos.forEach(articulo => {
        const div = document.createElement('div');
        div.classList.add('articulo');
        div.innerHTML = `
        <div class = "articulo">
        <img class = "articulo__img" src="/img/${articulo.id}.png" alt="">
        <h3 class = "articulo__h3">${articulo.nombre}</h3>
        <p class = "articulo__detalle">${articulo.descripcion}<br><span class = "articulo__precio"> $${articulo.precio}</span></p>
        <button class = "articulo__btn" id ="${articulo.id}">Agregar al carrito</button> 
        </div>
        `
        divCarrito.appendChild(div)
        const boton = document.getElementById(`${articulo.id}`);
        boton.addEventListener(`click`, function () {
            carritoIndex(articulo.id)
            /* alert(`${articulo.nombre} agregado al carrito`); */
        })
    });
}
divcarrito(articulosNecesarios)

const carritoDeCompras = [];

const carritoIndex = (articuloId) => {
    const contenedorCarrito = document.getElementById("carrito");
    const listaCarrito = () => {
        let articulo = articulosNecesarios.find(articulo => articulo.id == articuloId);
        carritoDeCompras.push(articulo);
        articulo.cantidad = 1;
        let div = document.createElement(`div`)
        div.innerHTML = `
        <div class="item__carrito">
        <p class="cantidad__articulo" id = "cantidad${articulo.id}">${articulo.cantidad} </p>
        <p>${articulo.nombre}</p>
        <p class = "valor__articulo">$${articulo.precio}</p>
        <button onclick = "eliminar(${articulo.id})" class = "eliminar__articulo"> X </button>
        </div>
        `;
        contenedorCarrito.appendChild(div)
    }
    listaCarrito();
    actualizacionTotal();
}

function actualizacionTotal (){
    let total = 0;
    const totalCarrito = document.querySelector(".totalCarrito");
    const articuloCarrito = document.querySelectorAll(".item__carrito")
    console.log(articuloCarrito);

    articuloCarrito.forEach(articuloCarrito =>{
        const articuloCarritoPrecioElemento = articuloCarrito.querySelector('.valor__articulo');  
        
        const articuloPrecio = Number(articuloCarritoPrecioElemento.textContent.replace('$',''));

        const articuloCantidadElemento = articuloCarrito.querySelector('.cantidad__articulo');

        const articuloCantidad = Number(articuloCantidadElemento.textContent);

        total = total + articuloPrecio * articuloCantidad;
    })

    totalCarrito.innerHTML = `El Total es $${total}`;

}


