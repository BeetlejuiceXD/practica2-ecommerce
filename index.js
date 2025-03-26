import Product from './productos.js';
import Carrito from './carrito.js';

const carrito = new Carrito();
const contenedor = document.querySelector('.container-productos .row');
const productosPorPagina = 12;
let paginaActual = 1;

const productos = [
  new Product(crypto.randomUUID(), "Zanahoria", "Rica en vitamina A", "Imagenes/Verduras/Zanahoria.png", 10, "verduras"),
  new Product(crypto.randomUUID(), "Tomate", "Alto en licopeno", "Imagenes/Verduras/Tomate.png", 12, "verduras"),
  new Product(crypto.randomUUID(), "Papa", "Fuente de energía", "Imagenes/Verduras/Papa.png", 8, "verduras"),
  new Product(crypto.randomUUID(), "Manzana", "Rica en fibra", "Imagenes/Frutas/Manzana.png", 15, "frutas"),
  new Product(crypto.randomUUID(), "Plátano", "Potásico", "Imagenes/Frutas/Platano.png", 9, "frutas"),
  new Product(crypto.randomUUID(), "Fresa", "Dulce y jugosa", "Imagenes/Frutas/Fresa.png", 18, "frutas"),
  new Product(crypto.randomUUID(), "Sandía", "Refrescante", "Imagenes/Frutas/Sandia.png", 22, "frutas"),
  new Product(crypto.randomUUID(), "Naranja", "Rica en vitamina C", "Imagenes/Frutas/Naranja.png", 11, "frutas"),
  new Product(crypto.randomUUID(), "Cebolla", "Perfecta para guisos", "Imagenes/Verduras/Cebolla.png", 7, "verduras"),
  new Product(crypto.randomUUID(), "Pepino", "Refrescante", "Imagenes/Verduras/Pepino.png", 6, "verduras"),
  new Product(crypto.randomUUID(), "Lechuga", "Hidratante y baja en calorías.", "Imagenes/Verduras/Lechuga.png", 10, "verduras"),
  new Product(crypto.randomUUID(), "Espinaca", "Rica en hierro y vitaminas.", "Imagenes/Verduras/Espinaca.png", 11, "verduras"),
  new Product(crypto.randomUUID(), "Brócoli", "Alto en fibra y antioxidantes.", "Imagenes/Verduras/Brocoli.png", 13, "verduras"),
  new Product(crypto.randomUUID(), "Calabacín", "Ideal para dietas bajas en calorías.", "Imagenes/Verduras/Calabacin.png", 10, "verduras"),
  new Product(crypto.randomUUID(), "Ajo", "Propiedades antibacterianas y cardiovasculares.", "Imagenes/Verduras/Ajo.png", 6, "verduras"),
  new Product(crypto.randomUUID(), "Pimiento", "Rico en vitamina C.", "Imagenes/Verduras/Pimiento.png", 8, "verduras"),
  new Product(crypto.randomUUID(), "Berenjena", "Fuente de antioxidantes.", "Imagenes/Verduras/Berenjena.png", 9, "verduras"),
  new Product(crypto.randomUUID(), "Chayote", "Bajo en calorías y rico en fibra.", "Imagenes/Verduras/Chayote.png", 7, "verduras"),
  new Product(crypto.randomUUID(), "Rábano", "Rico en fibra y antioxidantes.", "Imagenes/Verduras/Rabano.png", 6, "verduras"),
  new Product(crypto.randomUUID(), "Betabel", "Fuente natural de hierro y nitratos.", "Imagenes/Verduras/Betabel.png", 7, "verduras"),
  new Product(crypto.randomUUID(), "Tomatillo", "Alto en licopeno y vitamina C.", "Imagenes/Verduras/Tomatillo.png", 10, "verduras"),
  new Product(crypto.randomUUID(), "Champiñón", "Fuente de proteínas vegetales.", "Imagenes/Verduras/Champiñon.png", 12, "verduras"),
  new Product(crypto.randomUUID(), "Nopal", "Bajo en calorías y alto en fibra.", "Imagenes/Verduras/Nopal.png", 5, "verduras"),
  new Product(crypto.randomUUID(), "Apio", "Rico en antioxidantes y fibra.", "Imagenes/Verduras/Apio.png", 7, "verduras"),
  new Product(crypto.randomUUID(), "Coliflor", "Alto contenido en fibra y vitamina C.", "Imagenes/Verduras/Coliflor.png", 10, "verduras"),
  new Product(crypto.randomUUID(), "Uva", "Fuente de antioxidantes y resveratrol.", "Imagenes/Frutas/Uvas.png", 15, "frutas"),
  new Product(crypto.randomUUID(), "Mango", "Dulce y alto en vitamina A.", "Imagenes/Frutas/Mango.png", 14, "frutas"),
  new Product(crypto.randomUUID(), "Pera", "Rica en fibra y antioxidantes.", "Imagenes/Frutas/Pera.png", 12, "frutas"),
  new Product(crypto.randomUUID(), "Piña", "Dulce y rica en bromelina.", "Imagenes/Frutas/Pina.png", 16, "frutas"),
  new Product(crypto.randomUUID(), "Melón", "Dulce y con alto contenido de agua.", "Imagenes/Frutas/Melon.png", 14, "frutas"),
  new Product(crypto.randomUUID(), "Kiwi", "Fuente de vitamina C y fibra.", "Imagenes/Frutas/Kiwi.png", 13, "frutas"),
  new Product(crypto.randomUUID(), "Papaya", "Rica en papaína y fibra.", "Imagenes/Frutas/Papaya.png", 11, "frutas"),
  new Product(crypto.randomUUID(), "Durazno", "Dulce y rico en antioxidantes.", "Imagenes/Frutas/Durazno.png", 14, "frutas"),
  new Product(crypto.randomUUID(), "Ciruela", "Rica en fibra y antioxidantes.", "Imagenes/Frutas/Ciruela.png", 13, "frutas"),
  new Product(crypto.randomUUID(), "Cereza", "Dulce y antioxidante natural.", "Imagenes/Frutas/Cereza.png", 15, "frutas"),
  new Product(crypto.randomUUID(), "Coco", "Alto en electrolitos y grasas saludables.", "Imagenes/Frutas/Coco.png", 16, "frutas"),
  new Product(crypto.randomUUID(), "Frambuesa", "Antioxidante y rica en fibra.", "Imagenes/Frutas/Frambuesa.png", 17, "frutas"),
  new Product(crypto.randomUUID(), "Granada", "Fuente de antioxidantes naturales.", "Imagenes/Frutas/Granada.png", 14, "frutas"),
  new Product(crypto.randomUUID(), "Maracuyá", "Aromática y alta en vitamina C.", "Imagenes/Frutas/Maracuya.png", 13, "frutas"),
  new Product(crypto.randomUUID(), "Guayaba", "Aromática y alta en vitamina C.", "Imagenes/Frutas/Guayaba.png", 11, "frutas")
];

let productosFiltrados = productos;

document.getElementById("btn-frutas").addEventListener("click", () => {
  productosFiltrados = productos.filter(p => p.categoria === "frutas");
  paginaActual = 1;
  mostrarPagina(paginaActual);
});


//Barra de busqueda
const inputBuscador = document.getElementById("buscador");

inputBuscador.addEventListener("input", () => {
  const texto = inputBuscador.value.trim().toLowerCase();
  productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(texto)
  );
  paginaActual = 1;
  mostrarPagina(paginaActual);
});



document.getElementById("btn-verduras").addEventListener("click", () => {
  productosFiltrados = productos.filter(p => p.categoria === "verduras");
  paginaActual = 1;
  mostrarPagina(paginaActual);
});

document.getElementById("btn-todos").addEventListener("click", () => {
  productosFiltrados = productos;
  paginaActual = 1;
  mostrarPagina(paginaActual);
});

// Función para mostrar una página
function mostrarPagina(pagina) {
  contenedor.innerHTML = "";
  const inicio = (pagina - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productosFiltrados.slice(inicio, fin);

  productosPagina.forEach(producto => {
    const tarjeta = producto.renderCard();

    const boton = tarjeta.querySelector('.btn-add-cart');
    boton.addEventListener('click', (e) => {
      e.preventDefault();
      carrito.addItem(producto);
      alert(`${producto.nombre} agregado al carrito`);
    });

    contenedor.appendChild(tarjeta);
  });

  mostrarControlesPaginacion();
}

// Función para mostrar los botones de paginación
function mostrarControlesPaginacion() {
  const paginacion = document.getElementById("paginacion");
  paginacion.innerHTML = "";

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  // Botón Anterior
  const btnAnterior = document.createElement("button");
  btnAnterior.textContent = "Anterior";
  btnAnterior.className = "btn btn-outline-secondary mx-1";
  btnAnterior.disabled = paginaActual === 1;
  btnAnterior.addEventListener("click", () => {
    if (paginaActual > 1) {
      paginaActual--;
      mostrarPagina(paginaActual);
    }
  });
  paginacion.appendChild(btnAnterior);

  // Botones numerados
  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = "btn btn-outline-primary mx-1";
    if (i === paginaActual) btn.classList.add("active");

    btn.addEventListener("click", () => {
      paginaActual = i;
      mostrarPagina(paginaActual);
    });

    paginacion.appendChild(btn);
  }

  // Botón Siguiente
  const btnSiguiente = document.createElement("button");
  btnSiguiente.textContent = "Siguiente";
  btnSiguiente.className = "btn btn-outline-secondary mx-1";
  btnSiguiente.disabled = paginaActual === totalPaginas;
  btnSiguiente.addEventListener("click", () => {
    if (paginaActual < totalPaginas) {
      paginaActual++;
      mostrarPagina(paginaActual);
    }
  });
  paginacion.appendChild(btnSiguiente);
}

// Mostrar la primera página
mostrarPagina(paginaActual);