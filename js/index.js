let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll("#compras__btn")[0];
let modal = document.querySelectorAll(".modal")[0];
let cModal = document.querySelectorAll(".modal__container")[0];

abrir.addEventListener("click", function abrir(e) {
    e.preventDefault();
    cModal.style.opacity = "1";
    cModal.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function cerrar(e) {
    modal.classList.toggle("modal-close");
    setTimeout(function tiempo() {
        cModal.style.opacity = "0";
        cModal.style.visibility = "hidden";
    },850)
})
