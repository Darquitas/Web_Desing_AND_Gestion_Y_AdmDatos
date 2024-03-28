// Hace que aparezca el input de busqueda y que se oculte
document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon");
    const searchInput = document.getElementById("search-input");

    // Agregar evento clic al icono de búsqueda
    searchIcon.addEventListener("click", function() {
        // Alternar la visibilidad del campo de entrada de texto
        searchInput.classList.toggle("show");
    });
});
