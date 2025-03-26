import Carrito from './carrito.js';

const carrito = new Carrito();
const contenedor = document.getElementById("carrito-items");
const resumen = document.querySelector(".resumen-content");

function mostrarCarrito() {
  const items = carrito.getItems();
  contenedor.innerHTML = "";
  resumen.innerHTML = "";

  let subtotal = 0;

  items.forEach(item => {
    const total = item.precio * item.cantidad;
    subtotal += total;

    const div = document.createElement("div");
    div.className = "media d-flex border p-3 mb-3 align-items-center";
    div.innerHTML = `
  <div class="d-flex w-100">
    <div class="d-flex flex-column me-3" style="flex: 1;">
      <h5 class="mt-0">${item.nombre}</h5>
      <img src="${item.imagen}" class="w-100 mt-2" alt="${item.nombre}" style="max-width: 150px; border-radius: 6px;">
    </div>
    <div class="d-flex flex-column justify-content-between" style="flex: 2;">
      <div>
        <label class="form-label">Cantidad:</label>
        <input type="number" min="1" value="${item.cantidad}" data-id="${item.id}" class="form-control cantidad-input mb-2" style="width: 80px;">
        <p>Precio: $${item.precio.toFixed(2)}</p>
        <p>Total: $${total.toFixed(2)}</p>
      </div>
      <div class="text-end">
        <button class="btn-delete btn btn-danger mt-2">🗑️</button>
      </div>
    </div>
  </div>
`;

    // eliminar producto
    const btnEliminar = div.querySelector(".btn-delete");
    btnEliminar.addEventListener("click", () => {
      carrito.removeItem(item.id);
      mostrarCarrito();
    });

    // modificar cantidad
    const inputCantidad = div.querySelector(".cantidad-input");
    inputCantidad.addEventListener("change", () => {
      const nuevaCantidad = parseInt(inputCantidad.value);
      if (nuevaCantidad > 0) {
        carrito.updateItem(item.id, nuevaCantidad);
        mostrarCarrito();
      }
    });

    contenedor.appendChild(div);
  });

  const envio = 30;
  const totalFinal = subtotal + envio;

  resumen.innerHTML = `
    ${items.map(item => `<p>${item.nombre}: ${item.cantidad} x $${item.precio.toFixed(2)}</p>`).join('')}
    <p>Costo de Envío: $${envio.toFixed(2)}</p>
    <hr>
    <h5>Monto a Pagar: $${totalFinal.toFixed(2)}</h5>
    <button class="btn btn-success w-100 my-2">Pagar</button>
    <button class="btn btn-danger w-100" id="btn-cancelar">Cancelar</button>
  `;

  // vaciar carrito
  const btnCancelar = document.getElementById("btn-cancelar");
  btnCancelar.addEventListener("click", () => {
    if (confirm("¿Seguro que quieres vaciar el carrito?")) {
      carrito.clear();
      mostrarCarrito();
    }
  });
}

document.addEventListener("DOMContentLoaded", mostrarCarrito);