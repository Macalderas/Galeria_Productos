function crearProducto(imgSrc, nombre, precio, descripcion) {
    const producto = document.createElement("div");
    producto.classList.add("producto");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = nombre;
    producto.appendChild(img);

    const titulo = document.createElement("h2");
    titulo.textContent = nombre;
    producto.appendChild(titulo);

    const precioElemento = document.createElement("p");
    precioElemento.classList.add("precio");
    precioElemento.textContent = `$${precio}`;
    producto.appendChild(precioElemento);

    const desc = document.createElement("p");
    desc.textContent = descripcion;
    producto.appendChild(desc);

    return producto;
}

export { crearProducto };