document.addEventListener('DOMContentLoaded', function () {
    // Agregar eventos a los botones de compra
    const botones = document.querySelectorAll('.boton-compra');
    botones.forEach(boton => {
        boton.addEventListener('click', agregarProducto);
    });
});

function agregarProducto(event) {
    const productoElemento = event.target.closest('.producto');
    const producto = {
        id: productoElemento.getAttribute('data-id'),
        nombre: productoElemento.getAttribute('data-nombre'),
        precio: parseFloat(productoElemento.getAttribute('data-precio')),
    };

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya existe en el carrito
    const existente = carrito.find(item => item.id === producto.id);
    if (!existente) {
        // Si no existe, agregar el nuevo producto al carrito
        carrito.push(producto);
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
