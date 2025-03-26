export default class Carrito {
    constructor() {
      this.items = JSON.parse(localStorage.getItem("carrito")) || [];
    }
  
    guardar() {
      localStorage.setItem("carrito", JSON.stringify(this.items));
    }
  
    addItem(producto) {
      const existente = this.items.find(p => p.id === producto.id);
      if (existente) {
        existente.cantidad += 1;
      } else {
        this.items.push({ ...producto, cantidad: 1 });
      }
      this.guardar();
    }
  
    removeItem(id) {
      this.items = this.items.filter(p => p.id !== id);
      this.guardar();
    }
  
    updateItem(id, nuevaCantidad) {
      const item = this.items.find(p => p.id === id);
      if (item) {
        item.cantidad = nuevaCantidad;
        this.guardar();
      }
    }
  
    getItems() {
      return this.items;
    }
  
    clear() {
      this.items = [];
      this.guardar();
    }
  }