class Product {
    constructor(uuid, nombre, descripcion, imagen, precio, categoria) {
      if (!nombre.trim()) throw new Error("El nombre no puede estar vacío");
      if (precio < 0) throw new Error("El precio no puede ser negativo");
  
      this.id = uuid;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.precio = precio;
      this.categoria = categoria;
    }
  
    renderCard() {
      const div = document.createElement("div");
      div.className = "col-6 col-md-3 mb-4";
      div.setAttribute("data-categoria", this.categoria);
      div.innerHTML = `
        <div class="card h-100">
          <img src="${this.imagen}" class="card-img-top" alt="${this.nombre}">
          <div class="card-body">
            <h5 class="card-title">${this.nombre}</h5>
            <p class="card-text">${this.descripcion}</p>
            <p class="card-text"><strong>$${this.precio.toFixed(2)}</strong></p>
            <a href="#" class="btn btn-add-cart">Agregar al carrito</a>
          </div>
        </div>
      `;
      return div;
    }
  }
  
  export default Product;