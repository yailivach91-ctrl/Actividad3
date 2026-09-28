
// Abre el modal y coloca el título y el contenido recibido.
function abrirModal(titulo, texto) {
    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalTexto = document.getElementById("modalTexto");
    modalTitulo.textContent = titulo;
    modalTexto.textContent = texto;
    modal.style.display = "flex";
}
// Cierra el modal.
function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
// Cierra el modal cuando se hace clic fuera de su contenido.
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        cerrarModal();
    }
};

