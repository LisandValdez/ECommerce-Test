let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })
// Definir los productos

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("pro");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="des">
                <span>${producto.categoria.nombre}</span>
                <h5>${producto.titulo}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${producto.precio}</h4>
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        `;
        contenedorProductos.append(div);
    });
}

cargarProductos();