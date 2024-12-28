document.addEventListener('DOMContentLoaded', function () {
    actualizarCarrito();
});

function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('carrito-listas');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarProducto(producto.id));

        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });
mostrarMontoTotal();
}

function eliminarProducto(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id !== idProducto);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar el carrito actualizado
    actualizarCarrito();
}

function montoTotal() { 
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
     return carrito.reduce((total, producto) => total + producto.precio, 0); 
    }

function mostrarMontoTotal() { const total = montoTotal(); const montoTotalDiv = document.getElementById('monto-total');
    
    montoTotalDiv.textContent = `Monto total a pagar: $${total.toFixed(2)}`; }